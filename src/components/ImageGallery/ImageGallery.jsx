import ImageCard from "./ImageCard";

function ImageGallery(props) {
  return(
    <div className="container-fluid px-4 image-gallery" id="announcements" 
      style={{ 
        backgroundImage: `url(${props.Background})`
      }}>
      <h1 className="text-center mb-4">{props.GalleryTitle}</h1>
      <div className="row">
        <ImageCard
          Image={props.Image1}
          CardTitle={props.CardTitle1}
          ColumnSize={'col-lg-3 col-md-6 col-sm-12'}
        />
        <ImageCard
          Image={props.Image2}
          CardTitle={props.CardTitle2}
          ColumnSize={'col-lg-3 col-md-6 col-sm-12'}
        />
        <ImageCard
          Image={props.Image3}
          CardTitle={props.CardTitle3}
          ColumnSize={'col-lg-6 col-md-12 col-sm-12'}
        />
      </div>
      <div className="row py-3">
        <ImageCard
          Image={props.Image4}
          CardTitle={props.CardTitle4}
          ColumnSize={'col-lg-3 col-md-6 col-sm-12'}
        />
        <ImageCard
          Image={props.Image5}
          CardTitle={props.CardTitle5}
          ColumnSize={'col-lg-3 col-md-6 col-sm-12'}
        />
        <ImageCard
          Image={props.Image6}
          CardTitle={props.CardTitle6}
          ColumnSize={'col-lg-6 col-md-12 col-sm-12'}
        />
      </div>
    </div>
  );
}

export default ImageGallery;