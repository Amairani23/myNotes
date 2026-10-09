import { useEffect, useState } from "react"
export function useNote() {
  const [listaData, setListData] = useState(() => {
    const data = window.localStorage.getItem("datos")

    return data !== null
      ? JSON.parse(data)
      : [
          {
            id: 1,
            title: "Desayuno",
            description: "Huevo hervido",
            favorite: false,
          },
          {
            id: 2,
            title: "Comida para la semana",
            description: "Pollo en morita",
            favorite: false,
          },
          {
            id: 3,
            title: "Cena",
            description: "Quesadillas con queso",
            favorite: false,
          },
        ]
  })
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

  const handleTitle = (e) => {
    if (e.target.value.length <= 2 || e.target.value.length > 30) {
      setValidateTitle("Error: debe tener más de 2 caracteres y menos de 30")
    } else {
      setValidateTitle("")
    }

    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    if (e.target.value.length <= 2 || e.target.value.length > 30) {
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
    if (e.target.value.length <= 2 || e.target.value.length > 30) {
      setValidateDescriptionAct(
        "Error: debe tener más de 2 caracteres y menos de 30",
      )
    } else {
      setValidateDescriptionAct("")
    }

    setDescriptionAct(e.target.value)
  }

  //agregar
  const addNote = () => {
    setListData([
      ...listaData,
      {
        id: crypto.randomUUID().slice(0, 4),
        title,
        description,
        favorite: false,
      },
    ])

    setTitle("")
    setDescription("")
  }

  //Eliminar
  const deleteNote = (id) => {
    const nueva = listaData.filter((dato) => dato.id !== id)

    setListData(nueva)
  }

  //Editar
  const updateNote = () => {
    const edit = listaData.map((dato) => {
      if (dato.id === selectIndex) {
        return {
          ...dato,
          title: titleAct,
          description: descriptionAct,
        }
      }
      return dato
    })

    setListData(edit)
    setTitleAct("")
    setDescriptionAct("")
    setSelectIndex(null)
    setOpen(false)
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

  //Favoritos
  const favoriteNote = (id) => {
    const favorite = listaData.map((dato) => {
      if (dato.id === id) {
        return {
          ...dato,
          favorite: !dato.favorite,
        }
      }
      return dato
    })

    setListData(favorite)
  }

  //Guardar localStorage
  useEffect(() => {
    const data = JSON.stringify(listaData)
    window.localStorage.setItem("datos", data)
  }, [listaData])
  return {
    title,
    validateTitle,
    description,
    validateDescription,
    addNote,
    handleTitle,
    handleDescription,
    listaData,
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
  }
}
