import { useLocalStorage } from "../../hooks";
import {useState} from 'react';
import './styles.css';
import Input from '../Input';
const  Header = ({setSearchedMovie, setAuthModal}) => {
  const [userData, setUserData] = useLocalStorage('token');
  const [showMenu, setShowMenu] = useState(false);
  const handleThumbClick = () => setShowMenu(!showMenu);

  const handleSearch = (e) => {
    setSearchedMovie(e.target.value);
  }

  const handleLoginModal = () => {
    setAuthModal(true);
    setShowMenu(false);
    // console.log(token);
  }

  const handleLogout = () => {
    setUserData(''); 
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
              {!userData?.token && <li onClick={handleLoginModal}>login</li>}
              {userData?.token && <li onClick={handleLogout}>logout</li>}
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Header;
