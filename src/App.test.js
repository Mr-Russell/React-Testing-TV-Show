import React from 'react';
import {render} from '@testing-library/react';
import App from './App.js'

test('Renders App without errors', ()=>{
  render(<App />)
})

test('Renders Fetching Message', ()=>{
  const app = render(<App />)

  expect(app.getByText(/fetching data.../i)).toBeInTheDocument();
})
