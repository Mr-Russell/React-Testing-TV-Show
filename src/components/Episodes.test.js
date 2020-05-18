import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes.js'

test('Renders Episodes without errors', ()=>{
  render(<Episodes episodes={[]}/>)
})