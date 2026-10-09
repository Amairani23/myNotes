import { Plus } from "lucide-react"
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
    <form className="flex flex-col gap-4 rounded-xl " onSubmit={handleSubmit}>
      <h2>Escribe tu nota:</h2>
      <input
        value={title}
        onChange={handleTitle}
        type="text"
        placeholder="Escribe el titulo de la nota..."
        className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground border border-border bg-card p-2 shadow-sm"
        required
      />
      {validateTitle && (
        <span className="mt-1 block text-xs text-red-500">{validateTitle}</span>
      )}
      <input
        value={description}
        onChange={handleDescription}
        type="text"
        placeholder="Escribe una descripción de la nota..."
        className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground border border-border bg-card p-2 shadow-sm"
        required
      />
      {validateDescription && (
        <span className="mt-1 block text-xs text-red-500">
          {validateDescription}
        </span>
      )}
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 border border-borderp-2 shadow-sm"
      >
        <Plus className="h-4 w-4" />
        Agregar
      </button>
    </form>
  )
}
