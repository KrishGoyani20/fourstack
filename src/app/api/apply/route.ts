import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = (formData.get("fullName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const location = (formData.get("location") as string) || "";
    const selectedJob = (formData.get("selectedJob") as string) || "";
    const githubUrl = (formData.get("githubUrl") as string) || "";
    const linkedinUrl = (formData.get("linkedinUrl") as string) || "";
    const message = (formData.get("message") as string) || "";
    const cvFile = formData.get("cvFile") as File | null;

    let cvUrl = "";
    let cvFileName = "";

    // Upload CV file to Supabase Storage if configured
    if (cvFile && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      try {
        const fileExt = cvFile.name.split(".").pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
        const filePath = `resumes/${fileName}`;
        cvFileName = cvFile.name;

        const fileBuffer = await cvFile.arrayBuffer();

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(filePath, fileBuffer, {
            contentType: cvFile.type || "application/pdf",
            upsert: true,
          });

        if (!uploadError && uploadData) {
          const { data: publicUrlData } = supabase.storage
            .from("resumes")
            .getPublicUrl(filePath);

          cvUrl = publicUrlData.publicUrl;
        } else if (uploadError) {
          console.warn("Supabase Storage Upload Warning:", uploadError.message);
        }
      } catch (err) {
        console.warn("Storage upload exception:", err);
      }
    }

    // Insert Application data into Supabase Table `job_applications`
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error: dbError } = await supabase.from("job_applications").insert([
        {
          job_title: selectedJob,
          full_name: fullName,
          email: email,
          phone: phone,
          location: location,
          github_url: githubUrl || null,
          linkedin_url: linkedinUrl || null,
          message: message || null,
          cv_url: cvUrl || null,
          cv_file_name: cvFileName || (cvFile ? cvFile.name : null),
        },
      ]);

      if (dbError) {
        console.warn("Supabase DB Insert Warning:", dbError.message);
      }
    }

    // Send email notification to site owner
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          replyTo: email, // Reply to the candidate's email
          to: process.env.EMAIL_USER, // Sent to site owner's email
          subject: `New Application: ${selectedJob} - ${fullName}`,
          text: `You have received a new job application!

Role: ${selectedJob}

Candidate Details:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Location: ${location}
- GitHub: ${githubUrl || "N/A"}
- LinkedIn: ${linkedinUrl || "N/A"}
- Message: ${message || "N/A"}
- CV File Name: ${cvFileName || (cvFile ? cvFile.name : "N/A")}
- CV URL: ${cvUrl || "Not uploaded to Supabase Storage"}

Reply to this email directly to contact the candidate.`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email notification sent successfully.");
      } else {
        console.warn("EMAIL_USER or EMAIL_PASS environment variables are missing. Skipping email notification.");
      }
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Application processed.",
      data: {
        fullName,
        email,
        phone,
        location,
        selectedJob,
        cvUrl,
      },
    });
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process application" },
      { status: 500 }
    );
  }
}
