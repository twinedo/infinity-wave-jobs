interface SocialMedia {
  linkedin?: string;
  glassdoor?: string;
  twitter?: string;
}

interface Job {
  id: string;
  company: string;
  company_business: string;
  title: string;
  location: "Remote" | "Hybrid" | "Onsite";
  job_type: "full-time" | "part-time" | "contract" | "internship";
  posted_date: string;
  country: string;
  salary_range: string;
  applicants: number;
  company_logo: string;
  social_media: SocialMedia;
  founded_in: string;
  address: string;
  employees_count: string;
  website: string;
  responsibilities: string[];
  qualifications: string[];
}

interface ApiResponse {
  status: number;
  message: string;
  data: Job[];
}

declare module '@/lib/utils/data.json' {
  const value: ApiResponse;
  export default value;
}