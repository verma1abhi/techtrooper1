import React from "react";
import web from "../src/images/zx.png";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {/* <Card imgsrc={web} title="web development" />
              <Card imgsrc={web} title="App development" />
              <Card imgsrc={web} title="Software development" />
              <Card imgsrc={web} title="web development" />
              <Card imgsrc={web} title="App development" />
              <Card imgsrc={web} title="Software development" /> */}

              {Sdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
