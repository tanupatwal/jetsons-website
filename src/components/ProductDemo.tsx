import ThreeModel from './ThreeModel';

const ProductDemo = () => {
  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Interactive Robot Demo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our autonomous solar panel cleaning robot in 3D. 
              Drag to rotate, scroll to zoom, and see how our technology works.
            </p>
          </div>

          {/* 3D Model Container */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <ThreeModel />
            
            {/* Controls Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">🖱️</span>
                </div>
                <span className="text-sm">Drag to rotate</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">⚙️</span>
                </div>
                <span className="text-sm">Scroll to zoom</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">✋</span>
                </div>
                <span className="text-sm">Right-click to pan</span>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">AI-Powered</div>
              <div className="text-sm text-muted-foreground mt-1">Computer Vision</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15% Gain</div>
              <div className="text-sm text-muted-foreground mt-1">Energy Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Waterless</div>
              <div className="text-sm text-muted-foreground mt-1">Cleaning Technology</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;