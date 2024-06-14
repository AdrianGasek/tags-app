import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AutocompleteComponent from '../components/Autocomplate.jsx';
import options from '../data/data.json';

// Mock functions
const handleClose = jest.fn();
const onInputFocus = jest.fn();
const handleAdd = jest.fn();

const setup = () => {
  render(
    <AutocompleteComponent
      isOpen={true}
      handleClose={handleClose}
      onInputFocus={onInputFocus}
      handleAdd={handleAdd}
    />
  );
};

test('renderowanie komponentu', () => {
  setup();
  expect(screen.getByPlaceholderText(/Wyszukaj grupę lub tag/i)).toBeInTheDocument();
});

test('wyświetlanie opcji podczas wpisywania frazy w input', async () => {
  setup();
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText(/Wyszukaj grupę lub tag/i);
  
  // Simulate typing in the input
  await user.type(input, 'Muzyka klasyczna');
  const displayedOption = screen.getByText(options.tag[0]);
  // Check if options are displayed
  options.forEach(option => {
    if (option.tag.includes('Muzyka klasyczna')) {
      expect(displayedOption).toBeInTheDocument();
    }
  });
});

test('selects an option when clicked', async () => {
  setup();
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText(/Wyszukaj grupę lub tag/i);
  
  // Simulate typing in the input
  await user.type(input, 'Muz');
  
  // Click on the first option
  const firstOption = screen.getByText(options[0].tag);
  await user.click(firstOption);
  
  // Check if the option is selected
  expect(firstOption).toBeChecked();
});

test('calls handleAdd and handleClose when save button is clicked', async () => {
  setup();
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText(/Wyszukaj grupę lub tag/i);
  
  // Simulate typing in the input
  await user.type(input, 'test');
  
  // Click on the first option
  const firstOption = screen.getByText(options[0].tag);
  await user.click(firstOption);
  
  // Click on the save button
  const saveButton = screen.getByText(/Zapisz/i);
  await user.click(saveButton);
  
  // Check if handleAdd and handleClose are called
  expect(handleAdd).toHaveBeenCalledWith([options[0]]);
  expect(handleClose).toHaveBeenCalled();
});

test('czy button jest wyłączony gdy nie mamy wybranych opcji', () => {
  setup();
  const saveButton = screen.getByText(/Zapisz/i);
  expect(saveButton).toBeDisabled();
});
