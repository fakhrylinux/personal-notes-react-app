import { useContext, useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext.js";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { locale } = useContext(LocaleContext);

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onInputHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitEventHandler = async (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <div className="note-input">
      <h2>{locale === "id" ? "Buat Catatan" : "Create Note"}</h2>
      <form onSubmit={onSubmitEventHandler}>
        <input
          type="text"
          className="note-input__title"
          placeholder={locale === "id" ? "Judul" : "Title"}
          value={title}
          onChange={onTitleChangeEventHandler}
          required
        />
        <div
          className="note-input__body"
          onInput={onInputHandler}
          onChange={onContentChangeEventHandler}
          contentEditable
          data-placeholder={locale === "id" ? "Catatan..." : "Note..."}
        ></div>
        <button type="submit">{locale === "id" ? "Kirim" : "Submit"}</button>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
