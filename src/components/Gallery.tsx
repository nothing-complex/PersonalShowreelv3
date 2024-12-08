import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Image {
  src: string;
  alt: string;
}

export const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const foundImages: Image[] = [];
      let index = 1;
      let consecutiveFailures = 0;
      
      // Keep trying to load images until we hit 3 consecutive missing files
      while (consecutiveFailures < 3) {
        const src = `/gallery/image${index}.jpg`;
        
        try {
          // Try to load the image
          const response = await fetch(src);
          if (response.ok) {
            foundImages.push({
              src,
              alt: `Gallery image ${index}`
            });
            consecutiveFailures = 0;  // Reset counter on success
          } else {
            consecutiveFailures++;
          }
        } catch {
          consecutiveFailures++;
        }
        
        index++;
      }
      
      setImages(foundImages);
    };

    loadImages();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4 space-y-4"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={item}
          className="group relative break-inside-avoid overflow-hidden rounded-lg bg-gray-100"
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
