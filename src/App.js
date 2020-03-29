// @flow
import * as React from 'react';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import { Title, TitleSmall } from "./styles.js"

const App = () => (
  <div>
    <Navbar />
    <div>
      <Title fontSize={50}>
        <Hello name="Vinicius"/>
        <span> SPAN </span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  </div>
);

export default App;
