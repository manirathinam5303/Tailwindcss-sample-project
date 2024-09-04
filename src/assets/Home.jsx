import React, { useState } from "react";
import Vector from "./Vector.png";
import Sidebar from "./sidebar.png";
import LeftSidearrow from "./LeftsideArrow.png";
import RightSidearrow from "./RightsideArrow.png";
import Menu from "./menu.png";
import Image from "./images.jpeg";

const Home = () => {
  const [activeTab, setActiveTab] = useState("About me");
  const [images, setImages] = useState([Image, Image, Image]); 
  const handleImage = () => {
    
    setImages([...images, Image]);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const containerStyle = {
    width: "720px",
    height: "auto",
    padding: "20px",
    margin: "10px auto", 
  };

  return (
    <div className="grid grid-cols-2 container bg-zinc-600 text-textcolor p-4">
      <div className="left-side rounded-lg">
        
      </div>
      <div className="right_side flex flex-col p-5" style={{ width: "720px" }}>
        <div
          className="top_container shadow-xl bg-customGray rounded-lg"
          style={containerStyle}
        >
          <div className="nav flex flex-row items-start w-full">
            <img src={Vector} alt="Vector" className="items-start mr-5" />
            <div className="navbar flex flex-row justify-around space-x-0 bg-black rounded-3xl py-1 px-0 w-full">
              <h1
                onClick={() => handleTabClick("About me")}
                className={`cursor-pointer py-4 px-10 rounded-full ${
                  activeTab === "About me" ? "shadow-boxSmall bg-gray-800" : ""
                }`}
              >
                About me
              </h1>
              <h1
                onClick={() => handleTabClick("Experiences")}
                className={`cursor-pointer py-4 px-5 rounded-full ${
                  activeTab === "Experiences"
                    ? "shadow-boxSmall bg-gray-800"
                    : ""
                }`}
              >
                Experiences
              </h1>
              <h1
                onClick={() => handleTabClick("Recommended")}
                className={`cursor-pointer py-4 px-10 rounded-full ${
                  activeTab === "Recommended"
                    ? "shadow-boxSmall bg-gray-800"
                    : ""
                }`}
              >
                Recommended
              </h1>
            </div>
          </div>
          <div className="content flex flex-row mt-5">
            <div className="side_icon">
              <img
                src={Menu}
                alt="Sidebar Icon"
                className="items-start mr-5 mt-10"
              />
            </div>
            <div className="paragrap text-textcolor ml-5 mt-2">
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <p className="mt-7">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters Emma and Ella. Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM. This is a...
              </p>
            </div>
            <div className="side_icon">
              <img
                src={Sidebar}
                alt="Sidebar Icon"
                className="items-start ml-5"
              />
            </div>
          </div>
        </div>
        <div className="my-4 mx-6">
          <hr className="border-customGray border-2" />
        </div>

        <div
          className="bottom_container flex flex-col bg-customGray p-3 pb-4 rounded-lg shadow-xl"
          style={containerStyle}
        >
          <div className="flex justify-between mb-2">
            <div className="gallery flex">
              <div className="flex items-start ml-2">
                <img src={Vector} alt="Vector" className="items-start" />
              </div>
              <div className="ml-5">
                <button className="py-4 px-10 rounded-full bg-black text-white">
                  Gallery
                </button>
              </div>
            </div>
            <div className="addmore flex">
              <div>
                <button
                  className="py-4 px-10 rounded-full bg-customgray text-white"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 1) 0px 10px 15px -5px, rgba(0, 0, 0, 1) 0px 20px 40px -10px, rgba(0, 0, 0, 1) 0px -5px 10px 0px inset",
                  }}
                  onClick={handleImage}
                >
                  +Addmore
                </button>
              </div>
              <img
                src={LeftSidearrow}
                alt="Left Side Arrow"
                style={{ width: "90px", height: "80px" }}
              />
              <img
                src={RightSidearrow}
                alt="Right Side Arrow"
                style={{ width: "90px", height: "80px", marginRight: "20px" }}
              />
            </div>
          </div>
          <div className="images flex mt-3">
            <div
              className="menu-image-wrapper"
              style={{ margin: "0", padding: "0" }}
            >
              <img
                src={Menu}
                alt="Menu Icon"
                className="items-start ml-2"
                style={{ height: "30px", marginTop: "40px" }}
              />
            </div>
            <div className="images_container flex justify-evenly flex-wrap w-full">
              {images.map((img, index) => (
                <div key={index} className="images_1 grayscale mt-5">
                  <img
                    src={img}
                    alt={`Random Image ${index}`}
                    className="w-48 h-48 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-4 mx-6">
          <hr className="border-customGray border-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
