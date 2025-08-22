const TypeZSection = () => {
  return (
    <section className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Type Z Product Focus */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Type Z</h2>
          <p className="text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
            Fully autonomous waterless solar panel cleaning robot for rooftop solar installations
          </p>
          <div className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full shadow-sm">
            <span className="text-lg font-bold text-primary tracking-wide">Patented Technology</span>
          </div>
        </div>

        {/* Type Z Robot Image */}
        <div className="text-center mb-8">
          <div className="relative max-w-3xl mx-auto">
            <img 
              src="/type_z/TZ2.jpg" 
              alt="Type Z Autonomous Solar Cleaning Robot" 
              className="w-full rounded-2xl shadow-2xl border border-gray-200"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeZSection;