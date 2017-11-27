import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Greeter from './Greeter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greeter />, div);
});

it('renders default message', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Greeter />, div);
    // console.log(div.textContent);
    expect(div.innerHTML).toContain('Hello World');
});

it('updates state', () => {
  const greeter = renderer.create(<Greeter />).getInstance();
  greeter.handleChange({target: {value: 'Test'}});
  expect(greeter.state).toEqual({name: 'Test'});
});

it('renders default message again', () => {
    const greeter = shallow(<Greeter />);
    const welcome = <p>Hello World</p>;
    expect(greeter).toContainReact(welcome);
});

it('renders dynamic message', () => {
    const greeter = shallow(<Greeter />);

    greeter.find('input').simulate('change', {target: {value: 'Test'}});

    const welcome = <p>Hello Test</p>;
    expect(greeter).toContainReact(welcome);
});