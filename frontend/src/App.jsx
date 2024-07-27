import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeBefore from './pages/HomeBefore/HomeBefore';
import HomeAfter from './pages/HomeAfter/HomeAfter';
import Profile from './pages/Profile/Profile';
<<<<<<< HEAD
import Subject_page from './pages/Subject_page/Subject_page';
=======
import Progress from './pages/Progress/Progress';
>>>>>>> d3f1150cfa7a2028e416318a23a140cccf3eb956
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
        >
          <Route index element={<HomeAfter />} />
          <Route path="profile" element={<Profile />} />
<<<<<<< HEAD
          <Route path="subject" element={<Subject_page />} />
=======
          <Route path="progress" element={<Progress />} />
>>>>>>> d3f1150cfa7a2028e416318a23a140cccf3eb956
          <Route path="*" element={<Navigate to="/" />} />

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
