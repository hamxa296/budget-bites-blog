
import { Link } from "react-router-dom";

const demoPosts = [
  {
    id: 1,
    title: "One-Pot Creamy Tomato Pasta",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=640&q=80",
    preview: "Quick, creamy, and packed with flavor. Perfect for tight budgets and busy nights.",
  },
  {
    id: 2,
    title: "Savory Veggie-Packed Frittata",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=640&q=80",
    preview: "A protein-rich, flexible meal; uses whatever’s in your fridge. Ready in 30 minutes.",
  },
  {
    id: 3,
    title: "Crispy Chickpea Snack Bowls",
    image: "https://images.unsplash.com/photo-1519864600265-abb14883fb1b?auto=format&fit=crop&w=640&q=80",
    preview: "Crispy, craveable, and filling — a healthy snack or light lunch.",
  },
];

export default function BlogSection() {
  return (
    <section className="section container mx-auto">
      <h2 className="text-3xl font-headline mb-10 text-chocolate text-center">
        Trending Budget-Friendly Meals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {demoPosts.map((post) => (
          <div className="blog-card flex flex-col overflow-hidden" key={post.id}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover object-center"
              loading="lazy"
            />
            <div className="flex-1 flex flex-col p-5">
              <h3 className="text-xl font-semibold font-headline mb-2 text-chocolate">{post.title}</h3>
              <p className="mb-4 text-chocolate/80 text-[1rem]">{post.preview}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-accent font-semibold hover:underline mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
