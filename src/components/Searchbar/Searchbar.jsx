import { useState } from 'react';
import {
  Form,
  Input,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={value}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <SearchButtonLabel>Search</SearchButtonLabel>
      </SearchButton>
    </Form>
  );
};
