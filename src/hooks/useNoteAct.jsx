import { useEffect, useState, useReducer } from "react"
const ADD_NOTE = "ADD_NOTE"
const DELETE_NOTE = "DELETE_NOTE"
const UPDATE_NOTE = "UPDATE_NOTE"
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
const DELETE_COMPLETED = "DELETE_COMPLETED"

// Una recomendación adicional
// Tu implementación ya tiene la idea central de useReducer:
//     dispatch : envía una acción.
//     action.type : identifica la operación.
//     action.payload : contiene los datos necesarios.
//     notesReducer : devuelve el nuevo estado.
//     useEffect : guarda los cambios.

//Usa useReducer cuando un estado tiene varias transiciones o acciones relacionadas.
//datos (lista de notas) = useReducer = Tiene varias operaciones: agregar, eliminar, editar y favoritos.

export function useNoteAct() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [validateTitle, setValidateTitle] = useState("")
  const [validateDescription, setValidateDescription] = useState("")

  const [titleAct, setTitleAct] = useState("")
  const [descriptionAct, setDescriptionAct] = useState("")

  const [validateTitleAct, setValidateTitleAct] = useState("")
  const [validateDescriptionAct, setValidateDescriptionAct] = useState("")

  const [selectIndex, setSelectIndex] = useState(null)
  const [open, setOpen] = useState(false)
  const [openDetails, setOpenDetails] = useState(false)

  function notesReducer(datos, action) {
    switch (action.type) {
      case ADD_NOTE:
        return [...datos, action.payload]

      case DELETE_NOTE:
        return datos.filter((dato) => dato.id !== action.payload)

      case UPDATE_NOTE:
        return datos.map((dato) =>
          dato.id === action.payload.id
            ? {
                ...dato,
                title: action.payload.title,
                description: action.payload.description,
              }
            : dato,
        )

      case TOGGLE_FAVORITE:
        return datos.map((dato) =>
          dato.id === action.payload
            ? { ...dato, favorite: !dato.favorite }
            : dato,
        )

      case TOGGLE_COMPLETED:
        return datos.map((dato) =>
          dato.id === action.payload
            ? { ...dato, completed: !dato.completed }
            : dato,
        )

      case DELETE_COMPLETED:
        return datos.filter((nota) => !nota.completed)

      default:
        return datos
    }
  }

  const initialNotes = () => {
    const data = window.localStorage.getItem("datos")

    return data !== null
      ? JSON.parse(data)
      : [
          {
            id: 1,
            title: "Desayuno",
            description: "Huevo hervido",
            favorite: false,
            completed: false,
          },
          {
            id: 2,
            title: "Comida para la semana",
            description: "Pollo en morita",
            favorite: false,
            completed: false,
          },
          {
            id: 3,
            title: "Cena",
            description: "Quesadillas con queso",
            favorite: false,
            completed: false,
          },
        ]
  }

  const [datos, dispatch] = useReducer(notesReducer, undefined, initialNotes)

  /**********************  Adaptar tus funciones  ***********************/
  //Agregar nota
  const addNote = () => {
    dispatch({
      type: ADD_NOTE,
      payload: {
        id: crypto.randomUUID(),
        title,
        description,
        favorite: false,
        completed: false,
      },
    })

    setTitle("")
    setDescription("")
  }

  //Eliminar nota
  const deleteNote = (id) => {
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    })
  }

  //Eliminar notas completadas
  const deleteCompleted = () => {
    dispatch({ type: DELETE_COMPLETED })
  }

  //Editar nota
  const updateNote = () => {
    dispatch({
      type: UPDATE_NOTE,
      payload: {
        id: selectIndex,
        title: titleAct,
        description: descriptionAct,
      },
    })

    setTitleAct("")
    setDescriptionAct("")
    setSelectIndex(null)
    setOpen(false)
  }

  //Marcar favorito
  const favoriteNote = (id) => {
    dispatch({
      type: TOGGLE_FAVORITE,
      payload: id,
    })
  }

  //Marcar como completada
  const toggleCompleted = (id) => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: id,
    })
  }

  const select = (note) => {
    setTitleAct(note.title)
    setDescriptionAct(note.description)
    setSelectIndex(note.id)
    setOpen(true)
  }

  const selectDetails = (note) => {
    setTitleAct(note.title)
    setDescriptionAct(note.description)
    setOpenDetails(true)
  }

  //Guardar localStorage
  useEffect(() => {
    localStorage.setItem("datos", JSON.stringify(datos))
  }, [datos])

  const handleTitle = (e) => {
    if (e.target.value.length <= 2 || e.target.value.length > 30) {
      setValidateTitle("Error: debe tener más de 2 caracteres y menos de 30")
    } else {
      setValidateTitle("")
    }

    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    if (e.target.value.length <= 2 || e.target.value.length > 60) {
      setValidateDescription(
        "Error: debe tener más de 2 caracteres y menos de 30",
      )
    } else {
      setValidateDescription("")
    }

    setDescription(e.target.value)
  }

  const onChangeTitleAct = (e) => {
    if (e.target.value.length <= 2 || e.target.value.length > 30) {
      setValidateTitleAct("Error: debe tener más de 2 caracteres y menos de 30")
    } else {
      setValidateTitleAct("")
    }

    setTitleAct(e.target.value)
  }

  const onChangeDescriptionAct = (e) => {
    if (e.target.value.length <= 2 || e.target.value.length > 60) {
      setValidateDescriptionAct(
        "Error: debe tener más de 2 caracteres y menos de 30",
      )
    } else {
      setValidateDescriptionAct("")
    }

    setDescriptionAct(e.target.value)
  }

  return {
    listaData: datos,
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
    toggleCompleted,
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
    deleteCompleted,
  }
}
