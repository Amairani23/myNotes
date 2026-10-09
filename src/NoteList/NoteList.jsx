import { useContext } from "react"
import Note from "./Note/Note"
import NotesContext from "../contexts/NotesContext"

export default function NoteList() {
  const { listaData } = useContext(NotesContext)

  return (
    <ul className="space-y-3">
      {listaData.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  )
}
