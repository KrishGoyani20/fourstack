# FourStackTech

FourStackTech is a modern Next.js website for a Flutter app development company. The project includes a polished marketing site with pages for services, work, careers, about, and contact, along with a contact/application flow that connects to Supabase.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Features

- Responsive landing page with hero, services, testimonials, and stats
- Dedicated pages for About, Services, Work, Careers, and Contact
- Contact/application submission experience with Supabase integration
- SEO metadata and polished UI for a professional agency brand

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```

2. Create a local environment file
   ```bash
   touch .env.local
   ```

3. Add your Supabase environment variables
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

- src/app: route-based pages and API handlers
- src/components: reusable UI components such as Navbar and Footer
- src/lib: shared library utilities, including Supabase client setup

## Notes

If you want to deploy this project, make sure the Supabase environment variables are configured in your hosting platform as well.

## Database Setup

To fix the `ERROR: 42710: policy "Allow public insert to job_applications" already exists` error when configuring your database, run this query in your Supabase SQL editor:

```sql
-- First, drop the policy if it already exists
DROP POLICY IF EXISTS "Allow public insert to job_applications" ON job_applications;

-- Then, create your policy for public inserts
CREATE POLICY "Allow public insert to job_applications" 
ON job_applications 
FOR INSERT 
WITH CHECK (true);
```
atyre sui ja em kav chu topa










change blue color to white and first all charactre letter coclor change 
color je box ma che ene change kari nakh 
