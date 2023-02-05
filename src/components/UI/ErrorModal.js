import React from "react";
import ReactDom from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
//Style-Sheet
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onRemoveModal} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className="classes.content">
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onRemoveModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onRemoveModal={props.onRemoveModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onRemoveModal={props.onRemoveModal}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
