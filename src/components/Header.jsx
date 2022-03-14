import { useRef, useEffect, useState } from 'react';

const Header = ({ todaysDateDisplay, images }) => {
  const headerRef = useRef();
  const [imageCounter, setImageCounter] = useState(0);

  useEffect(() => {
    let interval;
    if (imageCounter === 0) {
      interval = setInterval(() => {
        setImageCounter((prevImageCounter) => prevImageCounter + 1);
      }, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (imageCounter >= images.length) {
      setImageCounter(0);
    }
    headerRef.current.style.backgroundImage = `url(${images[imageCounter]})`;
  }, [imageCounter, images]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header ref={headerRef}>
      <h1>News</h1>
      <h3>{todaysDateDisplay}</h3>
    </header>
  );
};

export default Header;
