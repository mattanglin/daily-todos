import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from 'state/todos';
import { Button } from 'components';
import { FaCog, FaTimes } from 'react-icons/fa';
import style from './ManageButton.style';

const ManageButton = () => {
  const isManaging = useSelector(selectors.getManaging);
  const dispatch = useDispatch();
  const toggleManaging = useCallback(
    () => dispatch(actions.setManaging(!isManaging)
  ), [dispatch, isManaging]);

  return (
    <Button css={style} onClick={toggleManaging}>
      {isManaging ? (
        <FaTimes title="Stop managing todos" />
      ) : (
        <FaCog title="Manage your todos" />
      )}
    </Button>
  );
};

export default ManageButton;
