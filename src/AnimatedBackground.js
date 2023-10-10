import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedBackground = () => {
  const backgroundProps = useSpring({
    from: { opacity: 0, background: '#0072ff', scale: 1 },
    to: [
      { opacity: 0.6, background: '#00c6ff', scale: 1.2 },
      { opacity: 0, background: '#0072ff', scale: 1 },
    ],
    loop: { reverse: true },
    config: { duration: 3000 },
  });

  return (
    <div style={{ position: 'fixed', top: '13.5%', left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <animated.div
          style={{
            width: '100%',
            height: '100%',
            opacity: backgroundProps.opacity,
            background: backgroundProps.background,
            transform: backgroundProps.scale.interpolate((s) => `scale(${s})`),
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;