import React from "react";
import "./App.css";
import { ReactIcon } from "./assets/icons/ReactIcon";

function App(): JSX.Element {
  return (
    <div className='App'>
      <header className='App-header'>
        <ReactIcon width={350} height={350} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
