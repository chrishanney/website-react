export default function NavBar() {
    return (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a 
                href="/" 
              >Home</a>
            </li>
            <li className="nav-list-item">
              <a 
                href="/projects" 
              >Projects</a>
            </li>
            <li className="nav-list-item">
              <a 
                href="/about" 
              >About</a>
            </li>
            <li className="nav-list-item">
              <a 
                href="/contact" 
              >Contact</a>
            </li>
          </ul>          
        </nav>
    )

}