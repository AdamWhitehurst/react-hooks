// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt';

function Tilt({children}) {
  const tiltRef = React.useRef();

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  React.useEffect(() => {
    const tiltNode = tiltRef.current
    VanillaTilt.init(tiltNode, {
        max: 25,
        speed: 400,
        glare: true,
        scale: 1.1,
        'max-glare': 0.5,
        reverse: true,
      })
      return () => tiltNode.vanillaTilt.destroy();
    }, []);
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
