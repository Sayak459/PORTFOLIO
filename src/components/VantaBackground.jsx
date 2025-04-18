import { useEffect, useRef, useState } from 'react';

const VantaBackground = ({ isDarkMode }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Clean up previous effect
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    const loadEffect = () => {
      if (!window.VANTA || !window.THREE) {
        setTimeout(loadEffect, 200);
        return;
      }

      const effect = isDarkMode
        ? window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x0
          })
        : window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xfafbfc,
            color1: 0x2fff,
          });

      setVantaEffect(effect);
    };

    loadEffect();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ backgroundColor: isDarkMode ? '#0f0f0f' : '#fafbfc' }}
    />
  );
};

export default VantaBackground;
