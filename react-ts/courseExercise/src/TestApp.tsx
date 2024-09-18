import { useState } from "react"
interface Note{
    id: string,
    content: string,
}


const TestApp = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState('');
    const handleSubmit =(event: React.SyntheticEvent)=>{
        event.preventDefault();
        const noteToAdd = {
            id : String(notes.length + 1),
            content: newNote
        }
        setNotes(notes.concat(noteToAdd))
        setNewNote('')
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
          <input value={newNote} onChange={(event)=> setNewNote(event.target.value)} />
          <button type="submit"> add</button>
       </form>

       <ul>
        {notes && notes.map(note =>
          <li key={note.id}>{note.content}</li>
        )}
      </ul>
    </div>
  )
}

export default TestApp
