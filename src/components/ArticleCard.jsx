function ArticleCard(props) {
  return(
    <div className="card">
      <img src={props.Image} className="card-img-top" alt="Article" />
      <div className="card-body text-center">
        <h5 className="card-title">{props.CardTitle}</h5>
        <p className="card-text px-4">{props.CardBody}</p>
        <a href={props.CardButtonLink} className="btn btn-danger font-weight-bold">Read More</a>
      </div>
    </div>
  );
}

export default ArticleCard;