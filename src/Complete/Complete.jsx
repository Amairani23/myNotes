import { Trash2 } from "lucide-react"
import { useContext } from "react"
import Note from "../NoteList/Note/Note"
import NotesContext from "../contexts/NotesContext"

export default function Complete() {
  const { listaData, deleteCompleted } = useContext(NotesContext)

  const complete = listaData.filter((nota) => nota.completed)

  return (
    <div className="space-y-4">
      {complete.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={deleteCompleted}
            className="inline-flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-200"
          >
            <Trash2 className="h-4 w-4" />
            Eliminar todas
          </button>
        </div>
      )}

      <ul className="space-y-3">
        {complete.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      {complete.length === 0 && (
        <p className="py-6 text-center text-sm text-muted-foreground">
          No tienes notas completadas.
        </p>
      )}
    </div>
  )
}
