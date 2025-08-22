import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Search, ExternalLink, X, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { loadMediaImages, type MediaItem } from '@/utils/mediaLoader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Media = () => {
  const navigate = useNavigate();
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const masonryRef = useRef<HTMLDivElement>(null);

  // Sample captions for demonstration
  const sampleCaptions = [
    { title: "Technology Innovation Summit", date: "March 2024", event: "Global Tech Conference" },
    { title: "Renewable Energy Breakthrough", date: "February 2024", event: "CleanTech Awards" },
    { title: "Industry Leadership Panel", date: "January 2024", event: "Energy Forum" },
    { title: "Sustainability Achievement", date: "December 2023", event: "Green Tech Expo" },
    { title: "Innovation Showcase", date: "November 2023", event: "Tech Summit" },
  ];

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const items = await loadMediaImages();
        // Add sample captions to items
        const itemsWithCaptions = items.map((item, index) => ({
          ...item,
          caption: sampleCaptions[index % sampleCaptions.length]
        }));
        setMediaItems(itemsWithCaptions);
      } catch (error) {
        console.error('Error loading media images:', error);
        setMediaItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case '=':
        case '+':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
          e.preventDefault();
          zoomOut();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateImage('next');
    }
    if (isRightSwipe) {
      navigateImage('prev');
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  const openImageModal = (item: MediaItem) => {
    setSelectedImage(item);
    setLightboxZoom(1);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setLightboxZoom(1);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = mediaItems.findIndex(item => item.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : mediaItems.length - 1;
    } else {
      newIndex = currentIndex < mediaItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(mediaItems[newIndex]);
    setLightboxZoom(1);
  };

  const zoomIn = () => {
    setLightboxZoom(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setLightboxZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const openInNewTab = (src: string) => {
    window.open(src, '_blank');
  };

  // Masonry layout calculation
  const getRandomHeight = (index: number) => {
    const heights = [280, 320, 360, 400, 440];
    return heights[index % heights.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Page Header */}
          <div className="text-center space-y-6 mb-16">
            <Button
              variant="outline"
              onClick={goToHome}
              className="group mb-8 bg-white hover:bg-gray-50 border-gray-200 shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Button>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Media Coverage
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A curated gallery of our media appearances, events, and highlights
              </p>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="text-gray-600">Loading media gallery...</p>
              </div>
            </div>
          ) : mediaItems.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16">
              <ImageIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Media Found</h3>
              <p className="text-gray-600">Add images to the public/media folder to see them here</p>
            </div>
          ) : (
            /* Masonry Grid Layout */
            <div 
              ref={masonryRef}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
              style={{
                animation: 'fadeInUp 0.6s ease-out'
              }}
            >
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative break-inside-avoid mb-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500 ease-out"
                  style={{ 
                    height: getRandomHeight(index),
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 flex space-x-4">
                        {/* Preview in Lightbox */}
                        <button
                          className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl hover:scale-110 transition-all duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            openImageModal(item);
                          }}
                          title="Preview in Lightbox"
                        >
                          <Search className="h-6 w-6 text-gray-800" />
                        </button>
                        
                        {/* Open in New Tab */}
                        <button
                          className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl hover:scale-110 transition-all duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            openInNewTab(item.src);
                          }}
                          title="Open in New Tab"
                        >
                          <ExternalLink className="h-6 w-6 text-gray-800" />
                        </button>
                      </div>
                    </div>

                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white space-y-1">
                        <p className="font-semibold text-lg">{(item as any).caption?.title || item.alt}</p>
                        <p className="text-white/80 text-sm">{(item as any).caption?.date}</p>
                        <p className="text-white/70 text-xs">{(item as any).caption?.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Enhanced Lightbox Modal with Zoom and Captions */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4" 
          onClick={closeImageModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-7xl max-h-full">
            <div 
              className="overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300"
              style={{ transform: `scale(${lightboxZoom})` }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-screen object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Navigation Arrows */}
            {mediaItems.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl border-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 w-12 h-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl border-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 w-12 h-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
            
            {/* Zoom Controls */}
            <div className="absolute top-6 left-6 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/95 hover:bg-white shadow-xl border-0 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  zoomIn();
                }}
                disabled={lightboxZoom >= 3}
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="bg-white/95 hover:bg-white shadow-xl border-0 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  zoomOut();
                }}
                disabled={lightboxZoom <= 0.5}
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-6 right-6 bg-white/95 hover:bg-white shadow-xl border-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 w-12 h-12"
              onClick={(e) => {
                e.stopPropagation();
                closeImageModal();
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Enhanced Caption Panel */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/90 text-white px-8 py-4 rounded-2xl backdrop-blur-sm shadow-2xl max-w-lg">
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">{(selectedImage as any).caption?.title || selectedImage.alt}</h3>
                <p className="text-white/80 text-sm">{(selectedImage as any).caption?.date}</p>
                <p className="text-white/70 text-xs">{(selectedImage as any).caption?.event}</p>
                <div className="border-t border-white/20 pt-2 mt-2">
                  <p className="text-white/60 text-xs">
                    {mediaItems.findIndex(item => item.src === selectedImage.src) + 1} of {mediaItems.length} • 
                    Use ←→ keys or swipe to navigate • +/- to zoom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Media;