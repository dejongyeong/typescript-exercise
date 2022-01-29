import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className='App'>
      <Routes>
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='*' element={<Navigate to='/users' />} />
      </Routes>
    </div>
  );
}

export default App;
