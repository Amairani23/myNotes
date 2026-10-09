import { Pencil, Star, Trash2, FileText } from "lucide-react"
import { useContext } from "react"
import NotesContext from "../../contexts/NotesContext"

export default function Note({ note }) {
  const { deleteNote, select, favoriteNote, section, selectDetails } =
    useContext(NotesContext)

  return (
    <li className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
      <p className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-card-foreground">
        {note.title}
      </p>
      <p className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-card-foreground">
        {note.description}
      </p>
      <div className="flex shrink-0 items-center gap-1">
        <button
          onClick={() => favoriteNote(note.id)}
          aria-label="Marcar como favorita"
          className={`rounded-lg p-2 transition-colors ${
            note.favorite
              ? "text-amber-500"
              : "text-muted-foreground hover:bg-muted hover:text-amber-500"
          }`}
        >
          <Star
            className={`h-4 w-4 ${note.favorite ? "fill-amber-500" : ""}`}
          />
        </button>
        <button
          onClick={() => selectDetails(note)}
          aria-label="Detalles nota"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileText className="h-4 w-4" />
        </button>
        {section === "inicio" && (
          <>
            <button
              onClick={() => select(note)}
              aria-label="Editar nota"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={() => deleteNote(note.id)}
              aria-label="Eliminar nota"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </li>
  )
}
