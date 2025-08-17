const TypeZSection = () => {
  return (
    <section className="w-screen h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Section Heading - Top */}
        <div className="text-center pt-0 pb-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">TYPE Z</h2>
          <p className="text-xl lg:text-2xl text-gray-600">ROBOTS FOR A SUSTAINABLE FUTURE</p>
        </div>

        {/* Type Z Robot Image - Center */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <img 
              src="/type_z/zeros1img3.png" 
              alt="Type Z Robot" 
              className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Features Grid - Bottom */}
        <div className="pt-26">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <img src="/type_z/nowater.png" alt="Water Free Operation" className="mx-auto w-12 h-12 mb-4" />
              <p className="text-lg font-medium text-gray-800">Water Free Operation</p>
            </div>
            <div className="text-center">
              <img src="/type_z/robot.png" alt="Truly Autonomous" className="mx-auto w-12 h-12 mb-4" />
              <p className="text-lg font-medium text-gray-800">Truly Autonomous</p>
            </div>
            <div className="text-center">
              <img src="/type_z/calendar.png" alt="Smart Scheduling" className="mx-auto w-12 h-12 mb-4" />
              <p className="text-lg font-medium text-gray-800">Smart Scheduling</p>
            </div>
            <div className="text-center">
              <img src="/type_z/wireless_charging.png" alt="Auto Charging" className="mx-auto w-12 h-12 mb-4" />
              <p className="text-lg font-medium text-gray-800">Auto Charging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeZSection;