import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import "./App.css";

function Users(): JSX.Element {
  return <div className='App'>User List</div>;
}

function User(): JSX.Element {
  const params = useParams();
  return <div className='App'>User Id: {params.id}</div>;
}

function NotFound(): JSX.Element {
  return <div className='App'>404 Not Found</div>;
}

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<User />} />
      <Route path='/' element={<Navigate to='/users' />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
