import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//components
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapperSetup = () => shallow(<App />);

const findByAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

//tests
test('renders page without error', () => {
  const wrapper = wrapperSetup();
  const appHeader = findByAttr(wrapper, 'header');
  expect(appHeader.length).toBe(1);
});

test('renders increase button', () => {
  const wrapper = wrapperSetup();
  const increaseButton = findByAttr(wrapper, 'increase');
  expect(increaseButton.length).toBe(1);
});

test('renders decrease button', () => {
  const wrapper = wrapperSetup();
  const decreaseButton = findByAttr(wrapper, 'decrease');
  expect(decreaseButton.length).toBe(1);
});

test('renders current counter display', () => {
  const wrapper = wrapperSetup();
  const counterDispaly = findByAttr(wrapper, 'counter-display');
  expect(counterDispaly.length).toBe(1);
});

test('counter starts at zero', () => {
  const wrapper = wrapperSetup();
  const count = findByAttr(wrapper, 'count').text();
  expect(count).toBe("0");
});

test('clicking on increase button increases the counter by 1', () => {
  const wrapper = wrapperSetup();
  const increaseButton = findByAttr(wrapper, 'increase');
  increaseButton.simulate('click');
  const count = findByAttr(wrapper, 'count').text();
  expect(count).toBe("1");
});

test('clicking on decrease button decreases the counter by 1', () => {
  const wrapper = wrapperSetup();
  const decreaseButton = findByAttr(wrapper, 'decrease');
  decreaseButton.simulate('click');
  const count = findByAttr(wrapper, 'count').text();
  expect(count).toBe("-1");
})
