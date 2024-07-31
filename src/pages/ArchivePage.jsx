import { useContext, useEffect, useState } from "react";
import { getArchivedNotes } from "../utils/api.js";
import NotesList from "../components/NotesList.jsx";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import LocaleContext from "../contexts/LocaleContext.js";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div className="content">
      <section className="note_shelf">
        <h2>{locale === "id" ? "Arsip Catatan" : "Note Archives"}</h2>
        <SearchBar keywordChange={onKeywordChangeHandler} keyword={keyword} />

        {notes.length === 0 ? (
          <p className="notes-list__empty-message">No Note</p>
        ) : (
          <NotesList notes={filteredNotes} />
        )}
      </section>
    </div>
  );
}

export default ArchivePage;
