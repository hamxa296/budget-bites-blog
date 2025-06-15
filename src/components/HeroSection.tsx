
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[60vh] flex items-center bg-neutral md:rounded-b-[2rem] relative overflow-hidden section pb-12 pt-12 md:pt-20">
      <div className="absolute inset-0 opacity-85">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1600&q=80"
          alt="Budget food platter"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/90 via-white/90 to-primary/10" />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-chocolate drop-shadow">
          Affordable Meals That Taste Amazing — Without Breaking Your Budget
        </h1>
        <h2 className="text-lg md:text-2xl font-montserrat text-chocolate/80 mb-8 max-w-2xl mx-auto">
          Create hearty, healthy food for less.<br className="hidden md:inline" />
          Let&apos;s make every dollar count in your kitchen.
        </h2>
        <Link to="/blog" className="cta-btn animate-fade-in shadow-xl">
          View Our Blog
        </Link>
      </div>
    </section>
  );
}
