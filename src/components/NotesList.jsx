import React from 'react'
import NotesItem from './NotesItem'

function NotesList(props) {
    const {notes, onDelete, showFormattedDate, onArchive} = props
    return (
        <div className='notes-list'>
            {
                notes.map(note => (
                    <NotesItem {...note} key={note.id} onDelete={onDelete} showFormattedDate={showFormattedDate} onArchive={onArchive} />
                ))
            }
        </div>
    )
}

export default NotesList