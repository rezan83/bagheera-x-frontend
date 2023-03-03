import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setBugsFilter } from '../../store/bugsDataSlice';
import './sortAndFilter.scss';

const SortAndFilter: FC = () => {
  const bugsFilter = useSelector((state: RootState) => state.bugs.bugsFilter);
  const dispatch = useDispatch();

  const handelShowSolved = () => {
    dispatch(
      setBugsFilter({
        ...bugsFilter,
        showSolved: !bugsFilter.showSolved,
        active: true,
      }),
    );
  };
  const handelsortOrder = () => {
    dispatch(
      setBugsFilter({
        ...bugsFilter,
        sortOrder: -bugsFilter.sortOrder,
        active: true,
      }),
    );
  };
  const handelFilterReset = () => {
    dispatch(setBugsFilter({ sortOrder: 1, showSolved: true, active: false }));
  };
  return (
    <div className="sort-and-filter">
      <button className={bugsFilter.active ? 'filter-reset' : ''} onClick={handelFilterReset}>
        Reset All {bugsFilter.active ? '' : <span>&#128504;</span>}
      </button>
      <button className={bugsFilter.active ? '' : 'filter-reset'} onClick={handelsortOrder}>
        Priority: {bugsFilter.sortOrder > 0 ? <span>&uarr;</span> : <span>&darr;</span>}
      </button>
      <button className={bugsFilter.active ? '' : 'filter-reset'} onClick={handelShowSolved}>
        Solved: {bugsFilter.showSolved ? 'Showen' : 'Hidden'}
      </button>
    </div>
  );
};

export default SortAndFilter;
