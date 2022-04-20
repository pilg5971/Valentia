import React from "react";
import "./page_styles.css"

function OneShot() {
  return (
    <div id="one-shot">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-4 pl-4 char-image">
            <iframe src="https://tetra-cube.com/dnd/dnd-char-gen.html" 
              frameborder="2"
              title="Character Image & Story">
            </iframe>
          </div>
          <div className="col-md-6 col-sm-12 py-4 pr-4 char-sheet">
            <iframe src="https://levi-blodgett.github.io/dnd-char-generator/" 
              frameborder="2"
              title="Character Stats">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneShot;