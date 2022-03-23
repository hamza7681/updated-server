import React from "react";
import { Card } from "react-bootstrap";
import "./course.css";
import NineClass from "../../utils/class9th";
import TenClassData from "../../utils/class10th";
import ElevenClassData from "../../utils/class11";
import TwelveClassData from "../../utils/class12";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* Nine Class Card */}
    <div className="card-back">
      <div className="container-fluid">
        <div className="container"> <br/>
          <h1 className="class-heading ">Class 9th</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container ">
          <div className="card-container">
            {NineClass.map((item) => {
              return (
                <>
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center  card1"
                    onClick={() => {
                      navigate(`/detail/download/${item.id}/${item.name}`, {
                        state: [item.image,item.author,item.edition, item.downloads, item.book, item.keybook],
                      });
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="mt-2">
                        <h4 style={{ color: "white" }}>{item.name}</h4>{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
      </div>
{/* Ten Class Card */}
<div className="card-back">
      <div className="container-fluid">
        <div className="container">
          <h1 className="class-heading">Class 10th</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container ">
          <div className="card-container">
            {TenClassData.map((item) => {
              return (
                <>
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card1"
                    onClick={() => {
                      navigate(`/detail/download/${item.id}/${item.name}`, {
                        state: [item.image, item.author,item.edition, item.downloads, item.book, item.keybook],
                      });
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="mt-2">
                        <h4 style={{ color: "white" }}>{item.name}</h4>{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      {/* Eleven class card */}
      <div className="card-back">
      <div className="container-fluid">
        <div className="container">
          <h1 className="class-heading">Class 11th</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container ">
          <div className="card-container">
            {ElevenClassData.map((item) => {
              return (
                <>
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card1"
                    onClick={() => {
                      navigate(`/detail/download/${item.id}/${item.name}`, {
                        state: [item.image, item.author,item.edition, item.downloads, item.book, item.keybook],
                      });
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="mt-2">
                        <h4 style={{ color: "white" }}>{item.name}</h4>{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
       </div>
  
      {/* Twelve class */}
      <div className="card-back">
      <div className="container-fluid">
        <div className="container">
          <h1 className="class-heading">Class 12th</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container ">
          <div className="card-container">
            {TwelveClassData.map((item) => {
              return (
                <>
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card1"
                    onClick={() => {
                      navigate(`/detail/download/${item.id}/${item.name}`, {
                        state: [item.image, item.author,item.edition, item.downloads, item.book, item.keybook],
                      });
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="mt-2">
                        <h4 style={{ color: "white" }}>{item.name}</h4>{" "}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </>
   
  );
};
export default Course;
