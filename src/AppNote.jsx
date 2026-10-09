import { useState } from "react"
import EditNote from "./EditNote/EditNote"
import Nav from "./Nav/Nav"
import NoteForm from "./NoteForm/NoteForm"
import NoteList from "./NoteList/NoteList"
import NoteListFavorite from "./NoteListFavorite/NoteListFavorite"
import NotesProvider from "./contexts/NotesContext"
import { useNoteAct } from "./hooks/useNoteAct"
import ShowNote from "./ShowNote/ShowNote"

export default function AppNote() {
  const {
    listaData,
    title,
    validateTitle,
    description,
    validateDescription,
    addNote,
    handleTitle,
    handleDescription,
    deleteNote,
    select,
    favoriteNote,
    titleAct,
    validateTitleAct,
    descriptionAct,
    validateDescriptionAct,
    updateNote,
    onChangeTitleAct,
    onChangeDescriptionAct,
    setOpen,
    open,
    openDetails,
    setOpenDetails,
    selectDetails,
    dispatch,
  } = useNoteAct()

  const [section, setSection] = useState("inicio")

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <header className="mb-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Mis Notas
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Captura ideas, marca tus favoritas y mantén todo en orden.
          </p>
        </header>
        <NotesProvider.Provider
          value={{
            listaData,
            title,
            validateTitle,
            description,
            validateDescription,
            addNote,
            handleTitle,
            handleDescription,
            deleteNote,
            select,
            favoriteNote,
            titleAct,
            validateTitleAct,
            descriptionAct,
            validateDescriptionAct,
            updateNote,
            onChangeTitleAct,
            onChangeDescriptionAct,
            setOpen,
            open,
            openDetails,
            setOpenDetails,
            selectDetails,
            dispatch,
            section,
          }}
        >
          <Nav setSection={setSection} />

          {section === "inicio" && (
            <>
              <NoteForm />

              <div className="mt-8">
                <NoteList />
              </div>

              {open && <EditNote />}
              {openDetails && <ShowNote />}
            </>
          )}

          {section === "favoritos" && <NoteListFavorite />}
        </NotesProvider.Provider>
      </div>
    </div>
  )
}
