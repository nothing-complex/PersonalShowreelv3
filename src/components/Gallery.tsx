import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Image {
  src: string;
  alt: string;
}

export const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // In a real implementation, this would dynamically fetch from a folder
    // For now, we'll use the sample images
    const sampleImages = [
      { src: "/gallery/image1.jpg", alt: "Portrait in cafe" },
      { src: "/gallery/image2.jpg", alt: "Corporate portrait" },
      { src: "/gallery/image3.jpg", alt: "Cafe staff" },
      { src: "/gallery/image4.jpg", alt: "Group portrait" },
      { src: "/gallery/image5.jpg", alt: "Protest documentation" }
    ];
    setImages(sampleImages);
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={item}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};