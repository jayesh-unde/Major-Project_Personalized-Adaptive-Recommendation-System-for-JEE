import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeBefore from './pages/HomeBefore/HomeBefore';
import HomeAfter from './pages/HomeAfter/HomeAfter';
import Authenticate from './pages/Authenticate/Authenticate';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
// import Loader from './components/shared/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  const { loading } = useLoadingWithRefresh();
  const { auth } = useSelector((state) => state.auth);
  console.log(auth);
  return loading ? (
    <div>loading </div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={auth ? <MainLayout /> : <HomeBefore />}
        />
        <Route
          path="/authenticate"
          element={<Authenticate />}
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
