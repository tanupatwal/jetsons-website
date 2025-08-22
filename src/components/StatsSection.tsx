const StatsSection = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Autonomous Solar Cleaning Robots
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Jetsonsrobotics is revolutionizing rooftop solar plant maintenance with autonomous robots and supporting the sustainable energy transition with advanced technologies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16 lg:gap-24">
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
            <div className="text-lg lg:text-xl text-gray-700 font-semibold mb-1">Hours</div>
            <div className="text-base text-gray-500">Operation</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-lg lg:text-xl text-gray-700 font-semibold mb-1">Megawatts</div>
            <div className="text-base text-gray-500">Solar Plant Cleaned</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-lg lg:text-xl text-gray-700 font-semibold mb-1">Products</div>
            <div className="text-base text-gray-500">Developed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;