import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../../redux/entries/entries-operations";
import styles from "./InputForm.module.css";

export default function InputForm() {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onNameInput = (event) => {
    setName(event.target.value);
  };

  const onNumberInput = (event) => {
    setNumber(event.target.value);
  };

  const onSubmitEntry = (event) => {
    event.preventDefault();
    dispatch(addEntry({name, number}));
    event.target.reset();
  };

  return (
    <section className={styles.newEntrySection}>
      <form className="inputForm" onSubmit={onSubmitEntry}>
        <label className="inputLabel">
          First / Last name :
          <input
            className="inputField"
            type="text"
            onChange={onNameInput}
            required
          />
        </label>
        <label className="inputLabel">
          Phone number :
          <input
            className="inputField"
            type="tel"
            onChange={onNumberInput}
            required
          />
        </label>
        <button className={styles.newEntryButton} type="submit">
          Add entry
        </button>
      </form>
    </section>
  );
}
