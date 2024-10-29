import photo1 from "/962163-foto-4.jpg";
import photo2 from "/photo2.jpeg";
import photo3 from "/photo3.jpg";
import photo4 from "/photo4.jpg";
import photo5 from "/photo5.png";
import photo6 from "/photo6.jpeg";
import photo7 from "/photo7.png";
import photo8 from "/photo8.png";
import photo9 from "/photo9.png";
import { useState } from "react";

const images = [
  { src: photo1, alt: "Image 1" },
  { src: photo2, alt: "Image 2" },
  { src: photo3, alt: "Image 3" },
  { src: photo4, alt: "Image 4" },
  { src: photo5, alt: "Image 5" },
  { src: photo6, alt: "Image 6" },
  { src: photo7, alt: "Image 7" },
  { src: photo8, alt: "Image 8" },
  { src: photo9, alt: "Image 9" },
];

function PhotoGrid() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="my-7">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full border-2 border-dark_blue rounded-xl transition-colors duration-300 ${
              index % 2 === 0 ? 'bg-deep_green' : 'bg-deep_orange'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.src}
              loading="lazy"
              alt={image.alt}
              className={`w-full h-full object-cover border-2 border-dark_blue rounded-lg transition-transform duration-300 ${
                hoveredIndex === index
                  ? index % 2 === 0
                    ? 'transform rotate-6' 
                    : 'transform -rotate-6' 
                  : '' 
              }`}
            />
          </div>
        ))}
      </div>
    </div>

  );
}
export default PhotoGrid;
