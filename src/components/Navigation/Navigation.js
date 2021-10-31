import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
