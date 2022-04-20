function ImageCard(props) {
  return(
    <div className={props.ColumnSize}>
      <div className="card">
        <img className="card-img-top" src={props.Image} alt="Card"/>
        <div className="card-body">
          <h2 className="card-title">{props.CardTitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;