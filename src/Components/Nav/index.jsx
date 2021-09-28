import React from 'react';
import { Link,} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="nav">
        <ul>
          <li>
          <Link to='/'>Pagniation</Link>
          </li>
        </ul>
        <ul>
          <li>

          <Link to='/ToDo'>To Do</Link>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;
