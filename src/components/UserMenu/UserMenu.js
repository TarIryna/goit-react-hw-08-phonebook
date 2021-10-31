import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';
import { Button } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      {/* <img src={avatar} alt="" width="32" className={s.avatar} /> */}
      <span className={s.name}>{email}</span>
      <Button className={s.button} variant="info" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </div>
  );
}
