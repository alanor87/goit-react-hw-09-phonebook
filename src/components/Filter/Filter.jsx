import React from "react";
import { useDispatch } from "react-redux";
import { onChangeFilter } from "../../redux/filter/filter-actions";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();

  const filterChangeHandler = (event) => {
    dispatch(onChangeFilter(event.target.value));
  };

  return (
    <div className={styles["filter"]}>
      <label className={styles["filter-label"]}>
        Find contacts by name
        <br />
        <input
          className={styles["filter-input"]}
          type="text"
          onChange={filterChangeHandler}
        />
      </label>
    </div>
  );
}
