import { Check, X } from "lucide-react"
import { useContext } from "react"
import NotesContext from "../contexts/NotesContext"

export default function EditNote() {
  const {
    updateNote,
    titleAct,
    descriptionAct,
    validateTitleAct,
    validateDescriptionAct,
    onChangeTitleAct,
    onChangeDescriptionAct,
    setOpen,
  } = useContext(NotesContext)

  const submit = (e) => {
    e.preventDefault()

    updateNote()
  }

  const salir = () => {
    setOpen(false)
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
      <form
        className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl"
        onSubmit={submit}
      >
        <h2 className="font-display text-lg font-semibold text-card-foreground">
          Editar nota
        </h2>
        <input
          autoFocus
          placeholder="Escribe el titulo de la nota..."
          value={titleAct}
          onChange={onChangeTitleAct}
          className="mt-4 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
        {validateTitleAct && (
          <span className="mt-1 block text-xs text-red-500">
            {validateTitleAct}
          </span>
        )}
        <input
          autoFocus
          placeholder="Escribe una descripción de la nota..."
          value={descriptionAct}
          onChange={onChangeDescriptionAct}
          className="mt-4 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
        {validateDescriptionAct && (
          <span className="mt-1 block text-xs text-red-500">
            {validateDescriptionAct}
          </span>
        )}
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={salir}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <X className="h-4 w-4" />
            Cancelar
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Check className="h-4 w-4" />
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}
