import React, {useEffect} from "react";
import {useSelector, useDispatch } from "react-redux";
import {
  deleteEntry,
  fetchEntries,
} from "../../redux/entries/entries-operations";
import { getFilteredContacts } from "../../redux/entries/entries-selectors";
import styles from "./PbookList.module.css";

export default function PbookList () {
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchEntries()), [dispatch]);

  const entries = useSelector(getFilteredContacts);

  const onDelete = (event) => dispatch(deleteEntry(event.target.dataset.id));

    return (
      <section>
        <div className={`${styles.entry} ${styles.pbookHeader}`}>
          <span>Name</span>
          <span>Phone number</span>
          <span>Actions</span>
        </div>
        <ul className={styles.pbookList}>
          {entries.map((entry) => (
            <li key={entry.id} className={styles.entry}>
              <span>{entry.name}</span>
              <span>{entry.number}</span>
              <div className={styles.controlBtnContainer}>
                <button
                  className={styles.entryControlBtn}
                  type="button"
                  data-id={entry.id}
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
}
