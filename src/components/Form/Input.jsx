import React from "react";
import "./Input.css";

//krijojm ni form (skeletin e formes) qe pranon propsa edhe 1 fuknsion, i bojm pass te komponenta tjeter
//input refi duet ose me ForwardRef ose me e manipulu refin kshtu ndryshe nuk funksionon.
const input = ({ label, type, name, inputHandler, data, inputRef }) => {
  const onChange = (e) => {
    inputHandler(e);
  };


  return (
    <div>
      <div className="input-item">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={data}
          onChange={(e) => onChange(e)}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default input;
