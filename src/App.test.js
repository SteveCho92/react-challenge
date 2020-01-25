import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

test('rendering App component', () => {
  const { getByText } = render(<App/>)
  expect(getByText(/React Challenge! Good Luck/i)).toBeInTheDocument();
});

//tests for changes made to component via snapshot
test('App component snapshot', () => {
  const AppSnapshot = TestRenderer.create(<App/>).toJSON();
  expect(AppSnapshot).toMatchSnapshot();
})

test("name input change and display", () => {
  const { getByTestId } = render(<App />);
  const inputName = getByTestId("name-input");

  const testName = "testing name";
  fireEvent.change(inputName, { target: { value: testName } });

  const labelName = getByTestId("name-display");

  expect(labelName.textContent).toBe("Name: " + testName);
});

test("age input change and display", () => {
  const { getByTestId } = render(<App />);
  const inputAge = getByTestId("age-input");

  const testAge = 10;
  fireEvent.change(inputAge, { target: { value: testAge } });

  const labelAge = getByTestId("age-display");
  expect(labelAge.textContent).toBe("Age: " + testAge);
});
