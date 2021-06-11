import React from "react";
import "./CatComp.css";

function CatComp({ person, posts, images }) {
  return (
    <div className="catcomp">
      <div className="cat__contents">
        <img src={images} alt="cat_comp-img" />
        <div className="sub-cat__contents">
          <p className="cat1">{person}</p>
          <p className="cat2">{posts}</p>
        </div>
      </div>
    </div>
  );
}

export default CatComp;
