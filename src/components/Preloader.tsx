import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1100);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 1700);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      id="preloader"
      className={hidden ? 'preloader-hidden' : ''}
      onClick={() => setHidden(true)}
      role="status"
      aria-live="polite"
    >
      <div className="spinner"></div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};
