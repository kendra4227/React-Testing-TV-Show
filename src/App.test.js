import React from 'react';
import { render } from '@testing-library/react';

import {  fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

import { fetchShow as mockFetchShow } from './api/fetchShow'; 



test("App fetchs data and renders correct", async () => {
    /* mockFetchShow.mockResolvedValueOnce(mockEpisodes);
*/

const { queryAllByText, getByText, getAllByText  } = render(<App />);

await waitFor(() => {
    getByText(/Select a season/i);
  });

  expect(queryAllByText(/episode/i)).toHaveLength(0);

  fireEvent.mouseDown(getByText(/Select a season/i));
  expect(getAllByText(/season/i)).toHaveLength(5);

  fireEvent.mouseDown(getByText(/season 2/i));
  expect(getAllByText(/episode/i)).toHaveLength(9);
}); 