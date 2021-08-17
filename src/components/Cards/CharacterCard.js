import classes from "./CharacterCard.module.css";

const CharacterCard = (props) => {
  const data = props.data;
  const imgPath = `${data.thumbnail.path}/portrait_medium.${data.thumbnail.extension}`;

  const onClickHandler = (type) => {
    console.log(type);
    const path = `http://gateway.marvel.com/v1/public/characters/${data.id}/${type}`;
    console.log(path);
    props.onShowModal(path, data.name, type);
  };

  return (
    <div className={classes.container}>
      <div className={classes["image-frame"]}>
        <div className={classes["image-frame__wrapper"]}>
          <img src={imgPath} alt="" />
        </div>
      </div>
      <div className={classes["card-body"]}>
        <p>{data.name}</p>
        <div className={classes.footer}>
          <ul>
            <li onClick={onClickHandler.bind(null, "comics")}>
              Comics: {data.comics.available}
            </li>
            <li>Events: {data.events.available}</li>
            <li>Series: {data.series.available}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
