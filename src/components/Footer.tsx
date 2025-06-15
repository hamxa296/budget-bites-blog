
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Categories", to: "/categories" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-chocolate text-neutral px-4 py-10 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
        <div className="mb-6 md:mb-0 flex-1">
          <span className="text-2xl font-headline font-bold block mb-2">
            Bites On A Budget
          </span>
          <span className="block text-neutral/80 mb-4 max-w-xs text-sm">
            Helping busy families, students, and anyone hungry for flavor cook hearty, healthy food — always on a budget.
          </span>
          <div className="flex space-x-4">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={22} className="text-neutral/70 hover:text-accent transition" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter size={22} className="text-neutral/70 hover:text-accent transition" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook size={22} className="text-neutral/70 hover:text-accent transition" />
            </a>
          </div>
        </div>
        <nav className="flex-1 flex flex-col items-center md:items-end">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-7 mb-4 md:mb-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:underline text-neutral/90 text-base">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-neutral/70 text-xs">
            &copy; {new Date().getFullYear()} Bites On A Budget. All rights reserved.
          </div>
        </nav>
      </div>
    </footer>
  );
}
