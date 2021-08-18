import { Fragment } from "react";
import classes from "./ModalItem.module.css";

const ModalItem = (props) => {
  // console.log(props);
  let date = null;
  const imgPath = `${props.data.thumbnail.path}/portrait_medium.${props.data.thumbnail.extension}`;
  if (props.type === "comics") {
    // console.log(imgPath);
    date = props.data.dates.find((date) => date.type === "focDate").date;
  }
  const urlMarvel = props.data.urls.find((date) => date.type === "detail").url;

  const infoData = (
    <Fragment>
      {props.data.diamonCode && <p>{props.data.diamonCode}</p>}
      {props.type === "comics" && <p>Pages: {props.data.pageCount}</p>}
      {date && <p>Published: {date.split("T")[0]}</p>}
      {props.type === "events" && (
        <p>Start: {props.data.start.split(" ")[0]}</p>
      )}
      {props.type === "events" && <p>End: {props.data.end.split(" ")[0]}</p>}
      {props.type === "series" && <p>Start: {props.data.startYear}</p>}
      {props.type === "series" && <p>End: {props.data.endYear}</p>}
      <a target="_blank" href={urlMarvel} rel="noreferrer">
        more information
      </a>
    </Fragment>
  );

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={imgPath} alt="" />
      </div>
      <div className={classes.body}>
        <div className={classes.header}>
          <p>{props.data.title}</p>
        </div>
        <div className={classes.info}>{infoData}</div>
        <div className={classes.description}>
          {props.data.description && <div>{props.data.description}</div>}
        </div>
      </div>
    </div>
  );
};

export default ModalItem;
