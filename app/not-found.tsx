"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const play = () => videoRef.current?.play();
    play();
    document.body.addEventListener("click", play, { once: true });
    document.body.addEventListener("touchstart", play, { once: true });
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="fixed left-1/2 -translate-x-1/2 top-0 
                   min-w-screen aspect-[9/16] 
                   object-cover object-top" // ← this is the magic
        src="/dance.mp4"
        loop
        playsInline
      />

      <div className="relative z-10 text-white text-center pt-32 text-6xl font-bold pointer-events-none">
        
      </div>
    </>
  );
}
