import React, {useState, useEffect} from 'react'

const NotePage = ({ match, history }) => {
    let noteId = match.params.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        if(noteId === 'new') return 


        let response = await fetch(`/api/note/${noteId}/`)
        let data = await response.json()
        setNote(data)

    }

    let updateNote = async () => {
        fetch(`/api/note/${noteId}/update/`, {
            method: 'PUT',
            headers : {
                'content-Type': 'application/json',                
            },
            body:JSON.stringify(note)
        })
    }

    let createNote = async () => {
        fetch(`/api/notes/create/`, {
            method: 'POST',
            headers : {
                'content-Type': 'application/json',                
            },
            body:JSON.stringify(note)
        })
    }

    let handleSubmit = ()=> {
        if(noteId !== 'new' && note.body === '') {
            deleteNote()
        } else if(noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null) {
            createNote()
        }
        history.push('/')
    }

    let handleChange = () => {

    }

    let deleteNote = async ()=> {
        fetch(`/api/note/${noteId}/delete/`, {
            method: 'DELETE',
            headers : {
                'content-Type':'application/json'
            }
        })
        history.push("/")
    }

  return (
    <div>
        <div>            
            <h3 onClick={handleSubmit}>=</h3>
            {noteId !== 'new' ? (
            <button onClick={deleteNote}>x</button> ) : (<button onClick={handleSubmit}>done</button>)}
        </div>
        <textarea onChange={(e) => setNote({
            ...note, 'body':e.target.value
        })} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage