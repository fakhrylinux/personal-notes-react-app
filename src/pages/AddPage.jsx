import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api.js";
import NoteInput from "../components/NoteInput.jsx";
// import NoteInput from '../components/NoteInput.jsx';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <section className="input__section">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
