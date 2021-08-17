import classes from "./CharacterCard.module.css";

const CharacterCard = (props) => {
  const data = props.data;
  const imgPath = `${data.thumbnail.path}/portrait_medium.${data.thumbnail.extension}`;
  return (
    <div className={classes.container}>
      <div className={classes["image-frame"]}>
        <div className={classes["image-frame__wrapper"]}>
          <img src={imgPath} alt="" />
        </div>
      </div>
      <div className={classes["card-body"]}>
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
