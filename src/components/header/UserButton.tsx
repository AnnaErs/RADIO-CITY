import {memo} from 'react';
import {Link} from 'react-router-dom';

const UserButton = () => {
  return <Link to="/admin">Админ. панель</Link>;
};

export default memo(UserButton);
