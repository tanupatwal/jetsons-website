import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Image as ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { loadMediaImages, type MediaItem } from '@/utils/mediaLoader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Media = () => {
  const navigate = useNavigate();
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imagesPerPage = 12;

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const items = await loadMediaImages();
        setMediaItems(items);
      } catch (error) {
        console.error('Error loading media images:', error);
        setMediaItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const totalPages = Math.ceil(mediaItems.length / imagesPerPage);
  const currentItems = mediaItems.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const navigatePage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentPage(prev => prev > 0 ? prev - 1 : totalPages - 1);
    } else {
      setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : 0);
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  const openImageModal = (item: MediaItem) => {
    setSelectedImage(item);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-16">
            <Button
              variant="outline"
              onClick={goToHome}
              className="group mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 smooth-transition" />
              Back to Home
            </Button>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground flex items-center justify-center gap-4">
                <ImageIcon className="h-8 w-8 text-primary" />
                Media Coverage
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our complete collection of media appearances, press coverage, and industry recognition
              </p>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground">Loading media gallery...</p>
              </div>
            </div>
          ) : mediaItems.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16">
              <ImageIcon className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No Media Found</h3>
              <p className="text-muted-foreground">Add images to the public/media folder to see them here</p>
            </div>
          ) : (
            /* Media Grid */
            <div className="space-y-8">
              {/* Navigation Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigatePage('prev')}
                    className="group"
                  >
                    <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 smooth-transition" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigatePage('next')}
                    className="group"
                  >
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                  </Button>
                </div>
              )}

              {/* Media Grid */}
              <div 
                ref={scrollRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
              >
                {currentItems.map((item, index) => (
                  <div
                    key={`${currentPage}-${index}`}
                    className="group relative bg-card rounded-xl p-6 hover:shadow-lg hover:border-primary/20 smooth-transition border border-border animate-fade-in cursor-pointer"
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      animationFillMode: 'both'
                    }}
                    onClick={() => openImageModal(item)}
                  >
                    <div className="aspect-square flex items-center justify-center">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 smooth-transition"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 smooth-transition rounded-xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 smooth-transition">
                        <div className="bg-white/90 dark:bg-black/90 rounded-full p-3">
                          <ImageIcon className="h-6 w-6 text-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2 pt-8">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPage 
                          ? 'bg-primary w-6' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      onClick={() => setCurrentPage(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Full Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" 
          onClick={closeImageModal}
        >
          <div className="relative max-w-5xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Navigation Arrows */}
            {mediaItems.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
            
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                closeImageModal();
              }}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {mediaItems.findIndex(item => item.src === selectedImage.src) + 1} / {mediaItems.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Media;