import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Password from './pages/Password/Password';
import SecondaryPage from './pages/SecondaryPage/SecondaryPage';
import ThirdPage from './pages/ThirdPage/ThirdPage';
import UserProfile from './pages/UserProfile/UserProfile';
import { store } from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="secondary-page" element={<SecondaryPage/>}>
          {/* <Route path="user-profile" element={<UserProfile/>}></Route>
          <Route path="password" element={<Password/>}></Route> */}
        </Route>
        <Route path="third-page" element={<ThirdPage/>}></Route>
        <Route path="secondary-page/user-profile" element={<UserProfile/>}></Route>
        <Route path="secondary-page/password" element={<Password/>}></Route>
        <Route path="*" element={<Navigate to='secondary-page'/>} />
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
