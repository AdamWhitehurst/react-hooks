import { render } from '@testing-library/react'
import React from 'react'
// import App from '../final/06'
import App from '../exercise/05'

test('calls VanillaTilt.init with the root node', () => {
  const {container, unmount} = render(<App />)
  const tiltRoot = container.querySelector('.tilt-root')
  expect(tiltRoot).toHaveProperty('vanillaTilt')

  const destroy = jest.spyOn(tiltRoot.vanillaTilt, 'destroy')
  expect(destroy).toHaveBeenCalledTimes(0)

  unmount()

  expect(destroy).toHaveBeenCalledTimes(1)
})
