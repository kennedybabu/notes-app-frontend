import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {
    let [notes, setNotes] = useState([]) 


    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
      fetch('/api/notes/')
      .then(response => response.json())
      .then(data => 
        setNotes(data))
        console.log(notes)
    }


  return (
    <div>
        <div>
            <h2>&#9782; Notes</h2>
            <p>{notes.length}</p>
        </div>
        <div>
            {notes.map((note, index) => (
              <ListItem key={index} note={note} />
            ))}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage