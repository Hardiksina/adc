import React, {useState, useEffect} from 'react';
import "./Styles/Carousel.css";
import EventItem from './EventItem';

export default function Carousel({Events}) {

  const [numItems, setNumItems] = useState(5);

  const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (direction === "right") {
            const nextIndex = (currentIndex + 1) % Events.length;
            setCurrentIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : 0));
        }
    };

    const handleResize = () => {
      if (window.innerWidth < 800) {
        if (window.innerWidth < 650) {
          setNumItems(1);
        } else {
          setNumItems(3);
        }
      } else {
        setNumItems(5);
      }
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



  return (

    <div className="carousel-container">
    <div className="navigation-btn">
      <button className="nav-button left-btn " onClick={() => handleClick("left")}>
        {" "}
        {" < "}
      </button>
    </div>
    {
    Events ? (
        Events.slice(currentIndex, currentIndex + numItems).map((item, index) => (
        <EventItem
            key= {index}
            title = {item.title}
            metaData = {item.metaData}
            image = {item.image}
        />
        ))
    ) : (
        "Loading..."
    )
    }


    <div className="navigation-btn">
      <button
        className=" nav-button right-btn"
        onClick={() => handleClick("right")}
      >
        {" "}
        {" > "}
      </button>
    </div>
  </div>
  )
}
