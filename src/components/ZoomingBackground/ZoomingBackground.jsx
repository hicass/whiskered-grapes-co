import { useState, useEffect } from 'react';

export default function ZoomingBackground({
  imageSrc,
  alt,
  originHeight,
  originPosition,
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

  const scale = 1 + scrollPos / 1850;

  const imageStyle = {
    width: '100vw',
    transform: `scale(${scale})`,
    objectFit: 'cover',
    position: 'absolute',
    height: { originHeight },
    zIndex: '-1',
    top: '0',
    transition: 'transform 0.05s ease-in-out',
  };
  return <img src={imageSrc} alt={alt} style={imageStyle} />;
}
