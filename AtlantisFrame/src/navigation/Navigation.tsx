import { NavLink } from 'react-router';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav>
      <a href="/" className='logo'>Atlantis Frame</a>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/DestinationPage'}>Destinations</NavLink>
        </li>
        <li>
          <NavLink to={'/AboutPage'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/ContactPage'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};