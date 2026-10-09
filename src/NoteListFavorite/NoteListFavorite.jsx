import { useContext } from "react"
import Note from "../NoteList/Note/Note"
import NotesContext from "../contexts/NotesContext"

export default function NoteListFavorite() {
  const { listaData } = useContext(NotesContext)

  const favorit = listaData.filter((notas) => notas.favorite)

  return (
    <ul className="space-y-3">
      {favorit.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  )
}
