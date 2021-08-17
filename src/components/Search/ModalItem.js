import classes from "./ModalItem.module.css";

const ModalItem = (props) => {
  // console.log(props);
  const imgPath = `${props.data.thumbnail.path}/portrait_medium.${props.data.thumbnail.extension}`;
  // console.log(imgPath);
  const date = props.data.dates.find((date) => date.type === "focDate").date;
  console.log(date);
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={imgPath} alt="" />
      </div>
      <div className={classes.body}>
        <div className={classes.header}>
          <p>{props.data.title}</p>
        </div>
        <div className={classes.info}>
          <p>{props.data.diamonCode}</p>
          <p>Pages: {props.data.pageCount}</p>
          <p>Published: {date.split("T")[0]}</p>
        </div>
        <div className={classes.description}>
          {props.data.description && <div>{props.data.description}</div>}
        </div>
      </div>
    </div>
  );
};

export default ModalItem;
