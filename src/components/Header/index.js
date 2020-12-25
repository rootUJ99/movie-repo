import {useState} from 'react';
import './styles.css';
import Input from '../Input';
const  Header = ({setSearchedMovie, setAuthModal}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleThumbClick = () => setShowMenu(!showMenu);
  const handleSearch = (e) => {
    setSearchedMovie(e.target.value);
  }
  const handleLoginModal = () => {
    setAuthModal(true);
  }
  return (
    <div className="header">
      <div className="header-content">
        <Input placeholder="Search Movie" onChange={handleSearch}/>
        <div className="dropdown">
          <button className="user-thumb" onClick={handleThumbClick}>
            <img src={'./smile.svg'}/>
          </button>
          {showMenu && <div className="menu">
            <ul>
              <li onClick={handleLoginModal}>login</li>
              <li>logout</li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Header;
