import {memo, useCallback, useState} from 'react';

import {updateUser} from '@api/usersAPI';

import ButtonWithDropdownList from '../ButtonWithDropdownList';
import {Option, RolesButtonType} from './types';

const RolesButton: RolesButtonType = ({role, id, options}) => {
  const [curRole, setRole] = useState(role);

  const updateUserRole = useCallback(
    (userId: string) => async (role: Option) => {
      await updateUser({id: userId, role: role.value});
      setRole(role.value);
    },
    [setRole]
  );

  return <ButtonWithDropdownList value={curRole} options={options} onClick={updateUserRole(id)} />;
};

export default memo(RolesButton);
