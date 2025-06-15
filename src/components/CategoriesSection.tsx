
const categories = [
  {
    name: "Breakfast",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Lunch",
    image: "https://images.unsplash.com/photo-1523983303491-64e22b0b8c31?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Dinner",
    image: "https://images.unsplash.com/photo-1516684669134-de6f27e8e6b4?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=320&q=80",
  },
];

import { Link } from "react-router-dom";

export default function CategoriesSection() {
  return (
    <section className="section container mx-auto">
      <h2 className="text-3xl font-headline mb-10 text-center text-chocolate">
        Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-center">
        {categories.map((cat) => (
          <Link
            to={`/categories/${cat.name.toLowerCase()}`}
            key={cat.name}
            className="transition group"
          >
            <div className="rounded-lg overflow-hidden shadow-food relative aspect-square">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-0 w-full text-center font-headline text-lg font-bold text-chocolate drop-shadow">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
