import type { Metadata } from 'next';
import { AboutSection } from '../../components/AboutSection';

export const metadata: Metadata = {
  title: 'Our Heritage & Folklore - Deyar Cafe',
  description: 'Learn about the genesis of Deyar Cafe, our Himalayan stories, and our stewardship of Shimla’s pristine Deodar forests.',
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <AboutSection />
    </div>
  );
}
