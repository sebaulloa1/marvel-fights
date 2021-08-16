const Card = (props) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.imgPath} alt="" />
      </div>
      <div className="card__body">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
