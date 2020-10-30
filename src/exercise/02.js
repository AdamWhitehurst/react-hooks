// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react';

function useLocalStorageState (key, initial="") {
  const [value, setValue] = React.useState(() => JSON.parse(window.localStorage.getItem(key)) || initial );
  
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Stranger" />
}

export default App
