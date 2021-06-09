import React, { useState } from "react";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { useSelector, useDispatch } from "react-redux";
import { addEntry } from "../../redux/entries/entries-operations";
import { getAllEntries } from "../../redux/entries/entries-selectors";
import styles from "./InputForm.module.css";

export default function InputForm() {
  const dispatch = useDispatch();
  const entries = useSelector(getAllEntries);
  

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
    if (entries.find((entry) => entry.name === name)) {
      error({
        title: "Error!",
        text: `Notice me, senpai! It's me, ${name}, I'm already in the list!`,
        icons: "brighttheme",
      });
      event.target.reset();
      return;
    }
    dispatch(addEntry({ name, number }));
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
