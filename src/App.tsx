import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Report from './pages/Report';
import SearchPage from './pages/SearchPage';
import NavBar from './components/Navigation/NavBar';
import ScrollToTop from './components/Navigation/ScrollToTop';
import Dashboard from './pages/Dashboard';
import Loading from './pages/Loading';
import FetchError from './pages/FetchError';
import { useFetchAllBugs } from './hooks/useFetchAllBugs';

import type { RootState } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { populateBugs } from './store/bugsDataSlice';
import { normalizeDataForCharts } from './helpers';

function App() {
  const { priorityData, solvedCount, solvedBy } = useSelector((state: RootState) =>
    normalizeDataForCharts(state.bugs.value),
  );
  const dispatch = useDispatch();

  const { fetchingState } = useFetchAllBugs(populateBugs, dispatch);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {fetchingState.isLoading && <Loading />}
              {fetchingState.isError && <FetchError />}
              {fetchingState.isReady && <Dashboard {...{ priorityData, solvedCount, solvedBy }} />}
            </>
          }
        />
        <Route path="/report" element={<Report />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <ScrollToTop />
    </div>
  );
}

export default App;
