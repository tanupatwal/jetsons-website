// Dynamic media loader utility
// This would work with a backend API in production, but for now we'll simulate it

export interface MediaItem {
  src: string;
  alt: string;
  filename: string;
}

export const loadMediaImages = async (): Promise<MediaItem[]> => {
  try {
    // In a real application, this would fetch from your backend API
    // that scans the media folder and returns a list of all images
    
    // All images currently in the media folder (based on directory scan)
    const allImages = [
      '/media/jetsons_logo.png',
      '/media/technology.jpg', 
      '/media/zeros1img3.png',
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

    // Transform to MediaItem objects with proper alt text
    const mediaItems: MediaItem[] = allImages.map(src => {
      const filename = src.split('/').pop() || '';
      const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, ' ');
      
      return {
        src,
        alt: altText,
        filename
      };
    });

    return mediaItems;
  } catch (error) {
    console.error('Error loading media images:', error);
    return [];
  }
};

// Utility to get just the src paths for backward compatibility
export const getMediaImagePaths = async (): Promise<string[]> => {
  const mediaItems = await loadMediaImages();
  return mediaItems.map(item => item.src);
};