import React, { useState } from 'react'

function NotesInput(props) {
    const { onAdd } = props
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [word, setWord] = useState(50)

    const addTitleHandler = (event) => {
        if(event.target.value.length <= 50) {
            setTitle(event.target.value)
            setWord(50 - event.target.value.length)
        }
        
    }

    const addBodyHandler = (event) => {
        setBody(event.target.value)
    }

    const onSubmitHandler = (event) => {
        const newNotes = {
            title, body
        }
        event.preventDefault()
        onAdd(newNotes)
        setTitle('')
        setBody('')
        setWord(50)
    }

    return (
        <div className='note-input'>
            <h2>Buat catatan</h2>
            <p className='note-input__title__char-limit'>Sisa Karakter: {word}</p>
            <form onSubmit={onSubmitHandler}>
                <input className="note-input__title" type="text" placeholder='Ini adalah judul ...' value={title} onChange={addTitleHandler} required />
                <textarea className='note-input__body' type="text" placeholder='Tuliskan catatanmu di sini ...' value={body} onChange={addBodyHandler} required ></textarea>
                <button type='submit'>Buat</button>
            </form>
        </div>
    )
}

export default NotesInput