import type { Metadata } from 'next';
import { ContactSection } from '../../components/ContactSection';

export const metadata: Metadata = {
  title: 'Visit the Hearth Space - Deyar Cafe',
  description: 'Operating hours, coordinates, hiking trail maps, and contacts for Deyar Cafe in Bir Billing, Himachal Pradesh.',
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <ContactSection />
    </div>
  );
}
