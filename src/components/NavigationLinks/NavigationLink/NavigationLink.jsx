import { NavLink } from 'react-router-dom';

import style from './NavigationLink.module.css';

const NavigationLink = ({ to, text, onClick }) => {
  return (
    <div className={style.link_wrapper}>
      <NavLink
        className={style.link_style}
        activeClassName={text !== 'SignOut' ? style.link_active_style : ''}
        to={to}
        onClick={onClick && onClick}
      >
        {text}
      </NavLink>
    </div>
  );
};
export default NavigationLink;
