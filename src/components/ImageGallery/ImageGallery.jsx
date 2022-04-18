import ImageCard from "./ImageCard";

function ImageGallery(props) {
  return(
    <div className="container-fluid p-4" 
      style={{ 
        backgroundImage: `url(${props.background})`
      }}>
      <div className="row no-gutters">
        <ImageCard
          Image={props.Image1}
          columnSize={'col-md-3 col-sm-12'}
        />
        <ImageCard
          Image={props.Image2}
          columnSize={'col-md-3 col-sm-12'}
        />
        <ImageCard
          Image={props.Image3}
          columnSize={'col-md-6 col-sm-12'}
        />
      </div>
      <div className="row no-gutters">
        <ImageCard
          Image={props.Image4}
          columnSize={'col-md-3 col-sm-12'}
        />
        <ImageCard
          Image={props.Image5}
          columnSize={'col-md-3 col-sm-12'}
        />
        <ImageCard
          Image={props.Image6}
          columnSize={'col-md-6 col-sm-12'}
        />
      </div>
    </div>
  );
}

export default ImageGallery;