import './Header.css'

const Header = props => {
  return (
    <header className="header">
      <h1>MERN Shop</h1>
      <div className="menu">
        <h3>Users</h3>
        <h3>Sign in</h3>
      </div>
    </header>
  )
}

export default Header
