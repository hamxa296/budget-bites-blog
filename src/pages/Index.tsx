
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import CategoriesSection from "@/components/CategoriesSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral font-montserrat">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BlogSection />
        <CategoriesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
