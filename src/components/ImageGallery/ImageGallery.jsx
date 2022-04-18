import ImageCard from "./ImageCard";

function ImageGallery(props) {
  return(
    <div className="container-fluid p-4" 
      style={{ 
        backgroundImage: `url(${props.background})`
      }}>
      <div className="row">
        <ImageCard
          Image={props.Image1}
          columnSize={'col-3'}
        />
        <ImageCard
          Image={props.Image2}
          columnSize={'col-3'}
        />
        <ImageCard
          Image={props.Image3}
          columnSize={'col-6'}
        />
      </div>
      <div className="row">
        <ImageCard
          Image={props.Image4}
          columnSize={'col-3'}
        />
        <ImageCard
          Image={props.Image5}
          columnSize={'col-3'}
        />
        <ImageCard
          Image={props.Image6}
          columnSize={'col-6'}
        />
      </div>
    </div>
  );
}

export default ImageGallery;