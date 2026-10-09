import { useContext } from "react"
import Note from "./Note/Note"
import NotesContext from "../contexts/NotesContext"

export default function NoteList() {
  const { listaData } = useContext(NotesContext)

  const completNotes = listaData.filter((notas) => !notas.completed)

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
      {completNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  )
}
