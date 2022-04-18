function ArticleCard(props) {
  return(
    <div class="card" style="width: 18rem;">
      <img src={props.Image} class="card-img-top" alt="Article Image" />
      <div class="card-body">
        <h5 class="card-title">{props.CardTitle}</h5>
        <p class="card-text">{props.CardBody}</p>
        <a href={props.CardButtonLink} class="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default ArticleCard;