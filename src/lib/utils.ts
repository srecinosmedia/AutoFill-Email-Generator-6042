import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const templates = [
  {
    id: 1,
    name: "Personalized Connection Follow-Up",
    subject: "Great Connecting at {eventName}!",
    content: `Hey {recipientName},

I hope you're doing well! It was a pleasure meeting you at {eventName} and learning more about your journey in {careerField}. Your insights were truly inspiring, and I appreciate the time you took to chat.

As I work toward my networking certification with Konnections Certification, I'm reminded how valuable connections like ours can be. {businessDescription}

If you ever need assistance with {interestingDetail}, feel free to reach out—I'd be happy to help. Looking forward to staying in touch!

Best,
{yourName}
Representing {representingCompany}`
  },
  {
    id: 2,
    name: "Professional Networking Follow-Up",
    subject: "Following Up – Let's Stay Connected!",
    content: `Hello {recipientName},

It was a pleasure meeting you at {eventName}! I truly enjoyed our conversation about {interestingDetail}, and I appreciated hearing about your experiences in {careerField}.

I'm currently working on my networking certification with Konnections Certification, and I value the connections I'm making along the way. {businessDescription}

If I can ever assist you with anything related to {representingCompany}, please don't hesitate to reach out. Looking forward to staying in touch!

Best regards,
{yourName}`
  }
];