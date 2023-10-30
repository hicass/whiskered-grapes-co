import { useState, useEffect } from 'react';

export default function ZoomingBackground({
  imageSrc,
  alt,
}) {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollPos(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 + scrollPos / 5000;

  const imageStyle = {
    width: '100vw',
    height: '100vh',
    transform: `scale(${scale})`,
    objectFit: 'cover',
    transition: 'transform 0.05s ease-in-out',
    filter: 'brightness(60%)',
  };
  return (
    <div className="top-image-container">
      <img src={imageSrc} alt={alt} style={imageStyle} />
      <div className="scroll-wrapper">
        <div className="scroll-wrapper-inner">
          <div className="scroll-down"></div>
        </div>
      </div>
    </div>
  );
}
