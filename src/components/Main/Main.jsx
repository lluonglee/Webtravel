import React from "react";

import "./main.css";
import { LuClipboardCheck } from "react-icons/lu";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img(1).jpg";
import { HiLocationMarker } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel\
    destinations in the world, this place is known for is luxurious stay and..",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle:'Machu Piccu',
    location: 'New zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'the epitome of romance, Bora Bora is one of the best travel\
    destinations in the world, this place is known for is luxurious stay and..'
  }
];
const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {/* so guys, here we are going use high ordfer array method(map)
        to do that we shall use a list of object in one array. i'm going to
        create an array named data and from that we shall .map() array to
        fetch each destination at once. i hope this will make sence to you*/}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestinations">
                {/* Here it will return single if from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">DETAIL <LuClipboardCheck className="icon" /></button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
