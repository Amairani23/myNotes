import { useContext } from "react"
import NotesContext from "../contexts/NotesContext"
import { X } from "lucide-react"

export default function ShowNote() {
  const { titleAct, descriptionAct, setOpenDetails } = useContext(NotesContext)
  const salir = () => {
    setOpenDetails(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm ">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl">
        <h2 className="font-display text-lg font-semibold text-card-foreground">
          Detalles de la nota
        </h2>
        <p className="text-lg py-4">Titúlo: {titleAct}</p>
        <p className="text-lg pb-4">Descripción: {descriptionAct}</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={salir}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <X className="h-4 w-4" />
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}
