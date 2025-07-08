type ProductHeroProps = {
  name: string;
  description: string;
};

const ProductHero = ({ name, description }: ProductHeroProps) => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://www.little-persia.com/cdn/shop/files/folded_persian_rugs.jpg?v=1683033018&width=3200')",
      }}
    >
      {/* 🔳 Glassmorphism Content Box */}
      <div className="relative z-10 w-full max-w-3xl mx-4 sm:mx-auto px-6 py-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          Explore Our {name} Carpets
        </h2>
        <p className="text-base sm:text-lg text-gray-100 leading-relaxed">{description}</p>
        <a
          href="#explore"
          className="inline-block mt-6 px-6 py-3 bg-black text-white border border-white rounded hover:bg-white hover:text-black transition"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default ProductHero;
