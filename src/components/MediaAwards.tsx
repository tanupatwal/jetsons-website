import { Trophy, Star, ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMediaImagePaths } from '@/utils/mediaLoader';

const MediaAwards = () => {
  const navigate = useNavigate();
  const [mediaImages, setMediaImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const highlights = [
    {
      type: 'award',
      title: 'World Economic Forum Recognition',
      description: 'Global Technology Pioneer Award 2023',
      badge: 'Award',
      icon: Trophy
    },
    {
      type: 'media',
      title: 'Featured in Inc42',
      description: 'India\'s Most Promising CleanTech Startup',
      badge: 'Media',
      icon: Star
    },
    {
      type: 'award',
      title: 'YES SCALE Award',
      description: 'Best Innovation in Renewable Energy',
      badge: 'Award',
      icon: Trophy
    }
  ];

  // Auto-scroll functionality for 3-image carousel (only when not hovered)
  useEffect(() => {
    if (mediaImages.length > 1 && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.min(3, mediaImages.length));
      }, 2000); // 2 seconds interval

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [mediaImages.length, isHovered]);

  useEffect(() => {
    // Dynamically load all images from media folder
    const loadImages = async () => {
      try {
        const images = await getMediaImagePaths();
        setMediaImages(images);
      } catch (error) {
        console.error('Failed to load media images:', error);
        setMediaImages([]);
      }
    };
    
    loadImages();
  }, []);

  const navigateCarousel = (direction: 'left' | 'right') => {
    const previewImages = mediaImages.slice(0, 3);
    const maxImages = previewImages.length;
    
    if (direction === 'left') {
      setCurrentIndex((prev) => prev === 0 ? maxImages - 1 : prev - 1);
    } else {
      setCurrentIndex((prev) => (prev + 1) % maxImages);
    }
  };

  const goToMediaPage = () => {
    navigate('/media');
  };

  const previewImages = mediaImages.slice(0, 3);

  return (
    <section id="media" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Recognition & Media Coverage
            </h2>
            <p className="text-muted-foreground">
              Awarded by global organizations and featured in leading publications
            </p>
          </div>
          
          {/* Awards and Recognition */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 primary-gradient rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Media Coverage Preview Section */}
          {previewImages.length > 0 && (
            <div className="mt-16 space-y-8">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center gap-3">
                  <ImageIcon className="h-6 w-6 text-primary" />
                  Media Coverage
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Featured highlights from our recent media appearances
                </p>
              </div>

              {/* 3-Image Carousel Preview */}
              <div 
                className="relative max-w-4xl mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Navigation Arrows */}
                {previewImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      onClick={() => navigateCarousel('left')}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="outline" 
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      onClick={() => navigateCarousel('right')}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}

                {/* Carousel Container */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 p-8">
                  {/* 3-Image Carousel Display */}
                  <div className="relative h-80 flex items-center justify-center">
                    <div className="aspect-[16/10] max-h-full bg-white rounded-xl shadow-sm overflow-hidden">
                      <img
                        src={previewImages[currentIndex]}
                        alt={`${previewImages[currentIndex].split('/').pop()?.replace(/\.[^/.]+$/, "") || `Media coverage ${currentIndex + 1}`}`}
                        className="w-full h-full object-contain p-6 transition-all duration-500"
                      />
                    </div>

                    {/* Carousel Indicators */}
                    {previewImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {previewImages.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              index === currentIndex 
                                ? 'bg-primary w-8' 
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Counter */}
                {previewImages.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                    {currentIndex + 1} / {previewImages.length}
                  </div>
                )}
              </div>

              {/* View All Media Coverage Button */}
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="group px-6 py-3 text-base"
                  onClick={goToMediaPage}
                >
                  View All Media Coverage
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaAwards;