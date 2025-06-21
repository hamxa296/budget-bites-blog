
export default function CallToActionSection() {
  return (
    <section className="section bg-primary/20 rounded-2xl max-w-3xl mx-auto my-12 flex flex-col items-center shadow-food">
      <h2 className="text-2xl md:text-3xl font-headline text-chocolate mb-2 text-center">
        Don&apos;t Miss Our Weekly Meal Plans
      </h2>
      <p className="text-chocolate/80 text-lg mb-6 text-center max-w-xl">
        Get fresh budget recipes in your inbox. Healthy, hearty, and big on flavor—delivered every week.
      </p>
      <form className="flex flex-col w-full gap-4 md:flex-row md:w-auto justify-center px-2 md:px-0">
        <input
          type="email"
          placeholder="Your email"
          className="border border-primary/40 rounded-lg px-5 py-3 text-lg font-montserrat focus:outline-accent w-full md:w-72"
          required
        />
        <button type="submit" className="cta-btn w-full md:w-fit">Subscribe Now</button>
      </form>
    </section>
  );
}
