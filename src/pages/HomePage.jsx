import { useContext, useEffect, useState } from "react";
import NotesList from "../components/NotesList.jsx";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import { getActiveNotes } from "../utils/api.js";
import LocaleContext from "../contexts/LocaleContext.js";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
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
        <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
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

export default HomePage;
