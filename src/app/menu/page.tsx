import type { Metadata } from 'next';
import { MenuSection } from '../../components/MenuSection';

export const metadata: Metadata = {
  title: 'Mountain Menu - Deyar Cafe',
  description: 'Explore our single-origin coffees extracted on woodfire, wild herbal infusions, and freshly baked hearth pastries.',
};

export default function MenuPage() {
  return (
    <div className="animate-fade-in">
      <MenuSection />
    </div>
  );
}
