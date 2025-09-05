import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import type { GalleryImage } from "@shared/schema";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const { data: images, isLoading } = useQuery<GalleryImage[]>({
    queryKey: ["/api/gallery"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4">Gallery</h2>
            <div className="h-6 bg-muted animate-pulse rounded mx-auto max-w-2xl"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold serif text-primary mb-4" data-testid="text-gallery-title">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-description">
              Moments captured from our incredible journeys and cultural experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images?.map((image) => (
              <div 
                key={image.id}
                className="relative aspect-square rounded-lg overflow-hidden card-hover cursor-pointer group"
                onClick={() => setSelectedImage(image)}
                data-testid={`img-gallery-${image.id}`}
              >
                <img 
                  src={image.imageUrl} 
                  alt={image.alt}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="absolute top-4 right-4 z-10">
            <button 
              onClick={() => setSelectedImage(null)}
              className="w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              data-testid="button-close-lightbox"
            >
              <X className="w-4 h-4" />
            </button>
          </DialogHeader>
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                data-testid="img-lightbox"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <DialogTitle className="text-white text-lg font-semibold" data-testid="text-lightbox-title">
                  {selectedImage.alt}
                </DialogTitle>
                <p className="text-white/80 text-sm" data-testid="text-lightbox-category">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
