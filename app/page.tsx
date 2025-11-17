"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const unmute = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
      }
    };

    // Unmute on first tap/click
    document.body.addEventListener("click", unmute, { once: true });
    document.body.addEventListener("touchstart", unmute, { once: true });
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="fixed left-1/2 -translate-x-1/2 top-0 
                   min-w-screen aspect-[9/16] 
                   object-cover object-top"
        src="/dance.mp4"
        autoPlay // ← REQUIRED
        muted // ← REQUIRED for autoplay
        loop
        playsInline
      />

      <div className="relative z-10 text-white text-center pt-32 text-6xl font-bold pointer-events-none">
        {/* Button that vanishes after one click */}
        {!clicked && (
          <button
            onClick={() => setClicked(true)}
            className={`relative z-20 bg-pink-400 text-3xl flex justify-center mx-auto text-black px-5 cursor-pointer py-2 rounded-full font-bold hover:bg-pink-500 transition shadow-2xl
                  ${clicked ? "hidden": ""}`}          >
            Click Me! 😃
          </button>
        )}
      </div>
    </>
  );
}
