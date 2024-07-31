import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/index.js";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../utils/api.js";
import ToggleArchiveButton from "../components/ToggleArchiveButton.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import React from "react";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();

  const navigate = useNavigate();

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    navigate("/");
  };

  const onUnArchiveHandler = async (id) => {
    await unarchiveNote(id);
    navigate("/archive");
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate("/");
  };

  return (
    <DetailPage
      id={id}
      onArchive={onArchiveHandler}
      onUnArchive={onUnArchiveHandler}
      onDelete={onDeleteHandler}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // note: getNote(props.id),
      note: [],
    };
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);
    this.setState(() => {
      return {
        note: data,
      };
    });
  }

  render() {
    if (!this.state.note) return <NotFoundPage />;
    const toggleArchive = this.state.note.archived
      ? this.props.onUnArchive
      : this.props.onArchive;
    const toggleArchiveButton = this.state.note.archived
      ? "unarchive"
      : "archive";

    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{this.state.note.title}</h3>

        <p className="detail-page__createdAt">
          {showFormattedDate(this.state.note.createdAt)}
        </p>
        <div className="detail-page__body">{this.state.note.body}</div>
        <div className="detail-page__action">
          <ToggleArchiveButton
            id={this.props.id}
            toggleArchive={toggleArchive}
            toggleInnerText={toggleArchiveButton}
          />
          <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
        </div>
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func,
  onUnArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
