export default function Nav({ setSection }) {
  const handleSection = (section) => {
    setSection(section)
  }

  return (
    <nav>
      <ul className="menu">
        <li>
          <button onClick={() => handleSection("inicio")}>Notas</button>
        </li>
        <li>
          <button onClick={() => handleSection("favoritos")}>Favoritos</button>
        </li>
      </ul>
    </nav>
  )
}
