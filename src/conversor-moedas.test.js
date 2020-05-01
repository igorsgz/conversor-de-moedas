import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

it('deve renderizar o componente sem erro', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
