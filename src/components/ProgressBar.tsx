import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      id="progress-bar"
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={width}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 h-[3px] bg-accent z-[9999] transition-[width] duration-75 ease-linear"
      style={{ width: `${width}%` }}
    />
  );
}
