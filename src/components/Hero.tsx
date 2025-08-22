const Hero = () => {
  const handleVideoLoad = () => {
    console.log('✅ Video loaded successfully');
  };

  const handleVideoError = (e: any) => {
    console.error('❌ Video failed to load:', e);
    console.error('Error details:', e.currentTarget.error);
  };

  const handleCanPlay = () => {
    console.log('✅ Video can start playing');
  };

  const handlePlay = () => {
    console.log('▶️ Video started playing');
  };

  return (
    <section className="w-full">
      {/* Full Screen Video Hero */}
      <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain max-w-full max-h-full"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={handleCanPlay}
          onPlay={handlePlay}
          onLoadStart={() => console.log('🔄 Video loading started')}
          style={{ 
            aspectRatio: 'auto',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        >
          <source src="/top_video/jetsons_web_video.mp4" type="video/mp4" />
          <source src="./top_video/jetsons_web_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;