const FeaturesSection = () => {
  const features = [
    {
      icon: "/type_z/nowater.png",
      title: "Water Free Operation",
      alt: "Water Free Operation"
    },
    {
      icon: "/type_z/robot.png", 
      title: "Truly Autonomous",
      alt: "Truly Autonomous"
    },
    {
      icon: "/type_z/calendar.png",
      title: "Smart Scheduling", 
      alt: "Smart Scheduling"
    },
    {
      icon: "/type_z/wireless_charging.png",
      title: "Auto Charging",
      alt: "Auto Charging"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 mb-6 bg-gray-50 rounded-3xl flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 shadow-sm">
                  <img 
                    src={feature.icon} 
                    alt={feature.alt} 
                    className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;