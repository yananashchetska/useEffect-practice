/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    window.addEventListener("resize", handleHeight);

    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return (
    <div>
      Your window width is: {windowWidth}
      <br />
      Your window heigth is: {windowHeight}
      <br />
    </div>
  );
};

export default App;
