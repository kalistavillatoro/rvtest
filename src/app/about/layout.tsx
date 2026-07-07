import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Recruiting Victory was founded by a Yale D1 athlete and built on our own CAPS methodology. Read the story and student outcomes behind the system.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
