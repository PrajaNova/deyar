import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Testimonials />
    </div>
  );
}
