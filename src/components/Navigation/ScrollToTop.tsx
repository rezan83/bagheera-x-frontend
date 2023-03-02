import React, { useEffect, useState } from 'react';
import './scrollToTop.scss';

function ScrollToTop() {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const scrollManager = () => {
      if (window.scrollY > window.screen.availHeight) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', scrollManager);
    return () => {
      window.removeEventListener('scroll', scrollManager);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll__btn">
      {ScrollToTop && (
        <button onClick={scrollUp}>
          <span role="img" aria-label="scrollup btn">
            &#11165;
          </span>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
