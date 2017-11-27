import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
    console.log(div.textContent);
    expect(div.innerHTML).toContain('Welcome to React');
});



