import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Questions about Recruiting Victory, or interested in individual advisory support? Tell us about your situation and we\'ll respond within 3–5 business days.',
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
