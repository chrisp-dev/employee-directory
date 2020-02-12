import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without breaking', () => {
  shallow(<App />);
});

test('renders Search Header', () => {
  const wrapper = mount(<App />);
  const welcome = <h1 className="jumbotron text-center">Search User Directory</h1>;
  expect(wrapper).toContainReact(welcome);
});
