import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/header';
import ProductGrid from './components/productGrid';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Store from './components/store';

it('renders without crashing', () => {
  const store = Store();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header on load', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true)
});

it('gets product data', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().products.length).not.toBe(0);
})
