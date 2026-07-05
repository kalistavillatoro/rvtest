import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inside the System',
  description:
    'See everything inside Recruiting Victory: a guided recruiting profile, a college outreach tracker with email templates, and a step-by-step course. $13.99 every 4 weeks.',
};

export default function OfferingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
