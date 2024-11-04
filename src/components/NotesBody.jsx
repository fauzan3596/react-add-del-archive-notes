import React from 'react'
import NotesInput from './NotesInput'
import NotesList from './NotesList'

function NotesBody(props) {
    const { notes, onDelete, showFormattedDate, onAdd, onArchive } = props

    const activeNotes = notes.filter(note => !note.archive)
    const archivedNotes = notes.filter(note => note.archive)

    return (
        <div className='note-app__body'>
            <NotesInput onAdd={onAdd} />
            <h2>Catatan aktif</h2>
            {
                activeNotes.length > 0 ? <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} showFormattedDate={showFormattedDate} /> : <p className='notes-list__empty-message'>Tidak ada catatan</p>
            }
            <h2>Arsip catatan</h2>
            {
                 archivedNotes.length > 0 ? <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} showFormattedDate={showFormattedDate} /> : <p className='notes-list__empty-message'>Tidak ada catatan yang diarsip</p>
            }
        </div>
    )
}

export default NotesBody