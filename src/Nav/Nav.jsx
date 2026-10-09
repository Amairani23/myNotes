import { NotebookText, Star, CheckCircle } from "lucide-react"

export default function Nav({ setSection, section }) {
  const handleSection = (section) => {
    setSection(section)
  }

  return (
    <nav className="w-full">
      <ul className="flex w-full gap-2 rounded-xl border border-border  p-1.5 mb-4">
        <li className="flex-1">
          <button
            onClick={() => handleSection("inicio")}
            aria-current={section === "inicio" ? "page" : undefined}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-blue-800 bg-blue-100 transition-all duration-200 ${
              section === "inicio"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border "
                : "text-muted-foreground hover:bg-card/70 hover:text-foreground "
            }`}
          >
            <NotebookText
              className={`h-4 w-4 ${
                section === "inicio" ? "fill-violet-200 text-violet-500" : ""
              }`}
            />
            Notas
          </button>
        </li>

        <li className="flex-1">
          <button
            onClick={() => handleSection("favoritos")}
            aria-current={section === "favoritos" ? "page" : undefined}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-blue-800 bg-blue-100 transition-all duration-200 ${
              section === "favoritos"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border"
                : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
            }`}
          >
            <Star
              className={`h-4 w-4 ${
                section === "favoritos" ? "fill-amber-400 text-amber-500" : ""
              }`}
            />
            Favoritos
          </button>
        </li>

        <li className="flex-1">
          <button
            onClick={() => handleSection("completos")}
            aria-current={section === "completos" ? "page" : undefined}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-blue-800 bg-blue-100 transition-all duration-200 ${
              section === "completos"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border"
                : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
            }`}
          >
            <CheckCircle
              className={`h-4 w-4 ${
                section === "completos" ? "text-green-600" : ""
              }`}
            />
            Completadas
          </button>
        </li>
      </ul>
    </nav>
  )
}
