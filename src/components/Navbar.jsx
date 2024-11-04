import React, { useState } from 'react'

function Navbar(props) {
    const { search, onSearch } = props

    const searchItemHandler = (e) => {
        onSearch(e.target.value)
    }

    return (
        <nav className='note-app__header'>
            <h1>Notes</h1>
            <input className="search-bar" type="text" placeholder='Cari catatan ...' value={search} onChange={searchItemHandler} />
        </nav>
    )
}

export default Navbar