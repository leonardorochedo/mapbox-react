import React from 'react';

import Zoom from 'react-reveal/Zoom';

import { Form } from './components/Form/Form';

export function App() {

  return (
    <>
      <Zoom>
        <Form />
      </Zoom>
    </>
  )
}