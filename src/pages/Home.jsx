import Header from '../components/Header';
import Footer from '../components/Footer';
import { Hero } from '../components/home/Hero';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { PromoSection } from '../components/home/PromoSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <ProductShowcase title="New Arrivals" />
        <PromoSection />
        <ProductShowcase title="Bestsellers" />
      </main>
      <Footer />
    </div>
  );
} 