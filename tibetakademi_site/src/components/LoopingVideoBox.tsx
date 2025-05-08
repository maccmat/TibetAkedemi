
'use client';

import { useEffect, useRef } from 'react';

interface LoopingVideoBoxProps {
  videoSrc: string;
  className?: string;
}

const LoopingVideoBox: React.FC<LoopingVideoBoxProps> = ({ videoSrc, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount, might be restricted by browser policies if not muted
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.warn("Video autoplay failed:", error));
    }
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-xl ${className}`}>
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted // Autoplay usually requires video to be muted
        playsInline // Important for iOS Safari
        className="w-full h-full object-cover"
        preload="metadata"
      >
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      {/* Optional: Add an overlay or play/pause controls here */}
    </div>
  );
};

export default LoopingVideoBox;

