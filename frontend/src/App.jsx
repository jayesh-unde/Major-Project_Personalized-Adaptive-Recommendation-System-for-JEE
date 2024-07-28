import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeBefore from './pages/HomeBefore/HomeBefore';
import HomeAfter from './pages/HomeAfter/HomeAfter';
import Profile from './pages/Profile/Profile';
import Subject_page from './pages/Subject_page/Subject_page';
import Progress from './pages/Progress/Progress';

import Authenticate from './pages/Authenticate/Authenticate';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Sectionpage from './pages/Section_Page/Section_page';
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
        >
          <Route index element={<HomeAfter />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subject" element={<Subject_page />} />
          <Route path="progress" element={<Progress />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/section/:subjectName" element={<Sectionpage />} />
        </Route>
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
