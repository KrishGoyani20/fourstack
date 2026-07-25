import type { Metadata } from "next";
import ContactClientPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — FourStackTech",
  description:
    "Get in touch with FourStackTech. Tell us about your Flutter app project and get a custom quote within 24 hours.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}
