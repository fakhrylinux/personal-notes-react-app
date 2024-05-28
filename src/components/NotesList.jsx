import NoteItem from './NoteItem.jsx';
import {noteItemPropTypes} from '../prop-types/index.js';
import PropTypes from 'prop-types';

function NotesList({notes}) {

  return (
      <div className="notes-list">
        {
          notes.map((note) => (

              <NoteItem
                  key={note.id}
                  id={note.id}
                  {...note}
              />
          ))
        }
      </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
}

export default NotesList;