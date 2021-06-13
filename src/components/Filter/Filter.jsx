import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, getFilterValue } from '../../redux/contacts';

import './Filter.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const onChange = useCallback(
    event => dispatch(addFilter(event.target.value)),
    [dispatch],
  );

  return (
    <label className="Filter">
      Find contact by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
