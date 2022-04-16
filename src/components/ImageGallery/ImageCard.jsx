import react from "react";

function ImageCard(props) {
  return(
    <div className={props.columnSize}>
      <div class="card">
        <img class="card-img-top" src={props.Image} alt="Card image cap"/>
        <div class="card-body">
          <h2 class="card-title">Card title</h2>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;