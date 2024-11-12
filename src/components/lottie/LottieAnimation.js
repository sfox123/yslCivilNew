// components/LottieAnimation.js

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, width, height }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData]);

  return (
    <div
      ref={animationContainer}
      style={{ width: width || '100%', height: height || '100%' }}
    ></div>
  );
};

export default LottieAnimation;
