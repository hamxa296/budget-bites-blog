
import { Utensils, DollarSign } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/categories", label: "Categories" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-white/80 sticky top-0 z-30 w-full border-b border-neutral/40 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between py-2 h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative w-10 h-10 flex items-center justify-center">
            <span className="absolute z-10 left-5 top-2.5 text-primary"><DollarSign size={18} strokeWidth={2.4} /></span>
            <Utensils size={36} className="text-accent" strokeWidth={2.3} />
          </span>
          <span className="text-2xl font-playfair font-bold text-chocolate">
            Bites&nbsp;<span className="text-primary">On A Budget</span>
          </span>
        </Link>
        <div className="flex gap-3 md:gap-8 text-base font-semibold font-montserrat">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-accent border-b-2 border-accent pb-[2px] transition"
                  : "text-chocolate hover:text-accent transition"
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
