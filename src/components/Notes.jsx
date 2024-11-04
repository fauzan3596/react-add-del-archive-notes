import React, { useState } from 'react'
import Navbar from './Navbar'
import NotesBody from './NotesBody'
import { getInitialData, showFormattedDate } from '../utils/index'

function Notes() {
    const [notes, setNotes] = useState(getInitialData())
    const [search, setSearch] = useState('')

    const onDeleteHandler = (id) => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    const onAddHandler = ({ title, body }) => {
        const newNotes = {
            id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
            title,
            body,
            createdAt: showFormattedDate(new Date()),
            archive: false,
        }
        setNotes([...notes, newNotes])
    }

    const onArchiveHandler = (id) => {
        const newNotes = notes.map(note => {
            if (note.id === id) {
                return { ...note, archive: !note.archive }
            } else {
                return note
            }
        })
        setNotes(newNotes)
    }

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar search={search} onSearch={setSearch} />
            <NotesBody
                notes={filteredNotes}
                onDelete={onDeleteHandler}
                showFormattedDate={showFormattedDate}
                onAdd={onAddHandler}
                onArchive={onArchiveHandler} />
        </>
    )
}

export default Notes