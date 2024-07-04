import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css';
import {BrowserRouter, Routes ,Route,Navigate} from 'react-router-dom';
import {useState} from 'react';

// import Home from './pages/Home/Home';
// import Navigation from './components/shared/Navigation/Navigation';
// import Activate from './pages/Activate/Activate';
// import Authenticate from './pages/Authenticate/Authenticate';
// import Rooms from './pages/Rooms/Rooms';
// import { useSelector } from 'react-redux';
// import React from 'react';
// import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
// import Loader from './components/shared/Loader/Loader';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      {/* <BrowserRouter>
        <Navigation/>
      <Routes>
     
      </Routes>
      <GuestRoute path="/"> <Home/> </GuestRoute>
      <GuestRoute path="/authenticate">
    <ToastContainer />

        <Authenticate/>
      </GuestRoute>
      <SemiProtectedRoute path="/activate">
        <Activate/>
      </SemiProtectedRoute>
      <ProtectedRoute path="/rooms">
        <Rooms/>
      </ProtectedRoute>
      <ProtectedRoute path="/room/:id">
        <Room/>
      </ProtectedRoute>
      <ProtectedRoute path="/profile/:username">
        <Profile/>
      </ProtectedRoute>
  </BrowserRouter> */}
    </>
  )
}
// const GuestRoute = ({ children, ...rest }) => {
//   const {user,isAuth} = useSelector((state)=> state.auth);
//   return (
//     <Routes>
//       <Route
//         {...rest}
//         element={
//           isAuth ? (
//             <Navigate
//               to="/rooms"
//               state={{ from: rest.location }}
//             />
//           ) : (
//             children
//           )
//         }
//       />
//     </Routes>
//   );
// };
export default App
