
import { useState, useEffect } from 'react';
import { IBug } from '../interfaces';

export const useFilterSortState = (bugsDataState: IBug[]) => {

  // if set is false, componant will show normal data
  const [bugsFilter, setBugsFilter] = useState({ sortPriority: 1, showSolved: true, set: false });
  // filtred data
  const [bugsFilterDataState, setBugsFilterDataState] = useState<IBug[]>([]);
 // responsible of sort/filtering data
 useEffect(() => {
    setBugsFilterDataState(() => {
      if (bugsFilter.set && bugsDataState.length>0) {
        // sort des or asc based on claback returning - or +
        // it changes based on sortPriority +1 or -1
        return [...bugsDataState]
          .sort((bug1, bug2) => bugsFilter.sortPriority * (bug1.priority - bug2.priority))
          // show all or show only not solved
          .filter(bug => (bugsFilter.showSolved ? true : !bug.solved));
      }

      return bugsDataState;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bugsFilter]);

  return {  bugsFilter,
    setBugsFilter,
    bugsFilterDataState,
    setBugsFilterDataState}


}
export default useFilterSortState