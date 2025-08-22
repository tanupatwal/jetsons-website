import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MediaCarousel from './MediaCarousel';

interface MediaGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MediaGalleryModal = ({ isOpen, onClose }: MediaGalleryModalProps) => {
  const [mediaImages, setMediaImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const loadMediaImages = async () => {
    setLoading(true);
    try {
      // Get all image files from the media folder
      const imageExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];
      const images: string[] = [];
      
      // In a real scenario, you'd fetch this from your backend or use a build-time solution
      // For now, we'll manually add the known images and you can expand this
      const knownImages = [
        '/media/image1.jpg',
        '/media/image2.jpg',
        '/media/image3.jpg',
        '/media/image4.jpg',
        '/media/image5.jpg',
        '/media/image6.jpg',
        '/media/image7.jpg',
        '/media/image8.jpg',
        '/media/image9.jpg',
        '/media/image10.jpg',
        '/media/image11.jpg',
        '/media/image12.jpg',
        '/media/image13.jpg',
        '/media/image14.jpg',
        '/media/image15.jpg'
      ];
      
      images.push(...knownImages);
      setMediaImages(images);
    } catch (error) {
      console.error('Error loading media images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadMediaImages();
    }
  }, [isOpen]);

  const handleImageClick = (image?: string) => {
    // If no image is passed, use the first image (for carousel click)
    const imageToShow = image || mediaImages[0];
    setSelectedImage(imageToShow);
  };

  const closeImageView = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = mediaImages.indexOf(selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : mediaImages.length - 1;
    } else {
      newIndex = currentIndex < mediaImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(mediaImages[newIndex]);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    const totalPages = Math.ceil(mediaImages.length / 5);
    
    if (direction === 'next') {
      setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : 0);
    } else {
      setCurrentPage(prev => prev > 0 ? prev - 1 : totalPages - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-6xl bg-card rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <ImageIcon className="mr-3 h-6 w-6 text-primary" />
                  Media Coverage Gallery
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore our journey through media coverage and achievements
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground">Loading media gallery...</p>
                  </div>
                </div>
              ) : mediaImages.length === 0 ? (
                <div className="text-center py-12">
                  <ImageIcon className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
                  <p className="text-lg text-muted-foreground">No media images found</p>
                  <p className="text-sm text-muted-foreground/75">Add images to the public/media folder to see them here</p>
                </div>
              ) : (
                <>
                  {/* Main Media Carousel */}
                  <div className="mb-8">
                    <MediaCarousel
                      images={mediaImages}
                      autoPlay={false}
                      showControls={true}
                      className="h-96"
                      onClick={handleImageClick}
                    />
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground text-center">
                      All Media ({mediaImages.length})
                    </h4>
                    
                    <div className="relative">
                      {/* Navigation Arrows */}
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg"
                        onClick={() => navigateMedia('prev')}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {/* Thumbnail Grid */}
                      <div className="px-12">
                        <div className="grid grid-cols-5 gap-3">
                          {mediaImages
                            .slice(currentPage * 5, (currentPage + 1) * 5)
                            .map((image, index) => (
                              <div
                                key={index}
                                className="group relative bg-muted/20 rounded-lg overflow-hidden cursor-pointer hover:shadow-md smooth-transition border-2 border-transparent hover:border-primary/30"
                                onClick={() => handleImageClick(image)}
                              >
                                <div className="aspect-square flex items-center justify-center p-2">
                                  <img
                                    src={image}
                                    alt={`Media coverage ${currentPage * 5 + index + 1}`}
                                    className="max-w-full max-h-full object-contain group-hover:scale-105 smooth-transition"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 smooth-transition" />
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Right Arrow */}
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg"
                        onClick={() => navigateMedia('next')}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="text-center text-sm text-muted-foreground">
                      Showing {Math.min(currentPage * 5 + 5, mediaImages.length)} of {mediaImages.length} media items
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Image View Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm" onClick={closeImageView}>
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative max-w-5xl max-h-full">
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-screen object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Navigation */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImageView();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGalleryModal;