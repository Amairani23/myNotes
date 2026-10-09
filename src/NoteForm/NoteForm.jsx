import { Plus, FileText } from "lucide-react"
import { useContext } from "react"
import NotesContext from "../contexts/NotesContext"

export default function NoteForm() {
  const {
    title,
    validateTitle,
    description,
    validateDescription,
    addNote,
    handleTitle,
    handleDescription,
  } = useContext(NotesContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    addNote()
  }

  return (
    <form
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
      onSubmit={handleSubmit}
    >
      {/* Encabezado */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gray-200  p-3 text-primary">
          <FileText className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight text-card-foreground">
            Crear una nota
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Guarda tus ideas y no olvides nada importante.
          </p>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Título */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="note-title"
          className="text-sm font-medium text-card-foreground"
        >
          Título de la nota
        </label>

        <input
          id="note-title"
          value={title}
          onChange={handleTitle}
          type="text"
          placeholder="Ej. Compras de la semana"
          maxLength={30}
          required
          aria-invalid={Boolean(validateTitle)}
          aria-describedby={validateTitle ? "title-error" : undefined}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />

        {validateTitle && (
          <span id="title-error" className="text-xs text-destructive">
            {validateTitle}
          </span>
        )}
      </div>

      {/* Descripción */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="note-description"
          className="text-sm font-medium text-card-foreground"
        >
          Descripción
        </label>

        <textarea
          id="note-description"
          value={description}
          onChange={handleDescription}
          placeholder="¿Qué quieres recordar?"
          rows={4}
          maxLength={30}
          required
          aria-invalid={Boolean(validateDescription)}
          aria-describedby={
            validateDescription ? "description-error" : undefined
          }
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />

        {validateDescription && (
          <span id="description-error" className="text-xs text-destructive">
            {validateDescription}
          </span>
        )}
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Plus className="h-4 w-4" />
        Agregar nota
      </button>
    </form>
  )
}
