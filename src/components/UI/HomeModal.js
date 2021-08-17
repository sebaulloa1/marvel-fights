import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./HomeModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {props.children}
      {/* <div className={classes.content}>{props.children}</div> */}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const HomeModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default HomeModal;
