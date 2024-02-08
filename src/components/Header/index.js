import './index.css'

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="nav-logo"
        />
        <h1> Wave </h1>
      </div>
      <ul className="nav-menu">
        <li> Home </li>
        <li> About </li>
        <li> Contact </li>
      </ul>
    </nav>
  )
}
export default Header
