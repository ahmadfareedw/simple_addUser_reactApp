import React from "react";
import Button from "./Buttons/Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.message}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Ok
          </Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
