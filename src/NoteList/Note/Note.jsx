import { Pencil, Star, Trash2, FileText, Check } from "lucide-react"
import { useContext } from "react"
import NotesContext from "../../contexts/NotesContext"

export default function Note({ note }) {
  const {
    deleteNote,
    select,
    favoriteNote,
    section,
    selectDetails,
    toggleCompleted,
  } = useContext(NotesContext)

  return (
    <li className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      {/* Título y favorito */}
      <div className="flex w-full min-w-0 items-start gap-3">
        <button
          onClick={() => toggleCompleted(note.id)}
          aria-label={
            note.completed ? "Marcar como pendiente" : "Marcar como completada"
          }
          aria-pressed={!!note.completed}
          className={`mt-0.5 shrink-0 rounded-lg border p-2 transition-colors ${
            note.completed
              ? "border-green-500 bg-green-500 text-white"
              : "border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          <Check className="h-4 w-4" />
        </button>

        {/* Texto: puede reducirse al ancho disponible */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <h3
            className={`break-words [overflow-wrap:anywhere] text-base font-semibold leading-snug ${
              note.completed
                ? "text-muted-foreground line-through"
                : "text-card-foreground"
            }`}
          >
            {note.title}
          </h3>

          <p
            className={`mt-1 whitespace-pre-wrap break-words [overflow-wrap:anywhere] text-sm leading-relaxed ${
              note.completed
                ? "text-muted-foreground line-through"
                : "text-card-foreground"
            }`}
          >
            {note.description}
          </p>
        </div>

        {/* Favorito: conserva su tamaño */}
        <button
          onClick={() => favoriteNote(note.id)}
          aria-label={
            note.favorite ? "Quitar de favoritos" : "Marcar como favorita"
          }
          aria-pressed={note.favorite}
          className={`shrink-0 rounded-xl p-2 transition-colors ${
            note.favorite
              ? "bg-amber-500/10 text-amber-500"
              : "text-muted-foreground hover:bg-muted hover:text-amber-500"
          }`}
        >
          <Star
            className={`h-5 w-5 ${note.favorite ? "fill-amber-500" : ""}`}
          />
        </button>
      </div>

      {section === "inicio" && (
        <>
          <div className="flex items-center justify-end gap-1 border-t border-border pt-3 ">
            <button
              onClick={() => selectDetails(note)}
              aria-label="Ver detalles de la nota"
              className="rounded-lg p-2 text-muted-foreground transition-colors bg-gray-200  hover:bg-muted hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
            </button>
            <button
              onClick={() => select(note)}
              aria-label="Editar nota"
              className="rounded-lg p-2 text-muted-foreground transition-colors bg-gray-200 hover:bg-primary/10 hover:text-primary"
            >
              <Pencil className="h-4 w-4" />
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              aria-label="Eliminar nota"
              className="rounded-lg p-2 text-muted-foreground transition-colors bg-gray-200  hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </li>
  )
}
