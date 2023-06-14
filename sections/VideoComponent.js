import React, { useRef, useState, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle click event
  const handleClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  // Implement Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the video is out of view
        if (!entries[0].isIntersecting && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.1, // Trigger callback when 10% of the video is out of view
      },
    );

    // Start observing
    observer.observe(videoRef.current);

    // Cleanup function
    return () => {
      // Check if videoRef.current is defined before unobserving
      if (videoRef.current) {
        // Stop observing
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="w-full h-[75%] flex justify-center items-center p-10">
      <div className="video-container max-w-5xl rounded-lg overflow-hidden shadow-xl relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={handleClick}
          poster="/hero-slider-1.jpg" // Add this line
        >
          <source src="/Senabel Intro-vdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="text-white text-4xl md:text-7xl rounded-full w-20 h-20 flex items-center justify-center"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
