import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'intersection-observer';
import { rest } from 'msw';
import React from 'react';
import App from './App';
import { commitsResponse } from './test/fixtures/commits';
import { baseUrl } from './test/mocks/handlers';
import { server } from './test/mocks/server';

describe('App', () => {
  it('Renders app', async () => {
    const { asFragment, getByText } = renderApp();

    await waitFor(() => {
      getByText(/your commits will show up here/i);
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('Search url and list commits', async () => {
    const { getByLabelText, getByTestId, getByText } = renderApp();

    userEvent.type(
      getByLabelText(/repository url/i),
      'https://github.com/amazing-user/amazing-repo',
    );

    userEvent.click(getByText(/load commits/i));

    await waitFor(() => {
      // First row result in table
      expect(getByTestId('table-row-0')).toBeInTheDocument();
    });
  });

  // This test throws an error on setState due to IntersectionObserver
  it('Loads more commits on scroll', async () => {
    const { getByLabelText, getByText, getByTestId, getAllByRole } = renderApp();

    userEvent.type(
      getByLabelText(/repository url/i),
      'https://github.com/amazing-user/amazing-repo',
    );

    userEvent.click(getByText(/load commits/i));

    await waitFor(() => {
      // First row result in table
      expect(getByTestId('table-row-0')).toBeInTheDocument();
    });

    const tableBody = getByTestId('table-body');
    const lastRow = getByTestId(`table-row-${commitsResponse.length - 1}`);

    // Scroll to lastRow
    fireEvent.scroll(tableBody, lastRow);

    await waitFor(() => {
      // Header row plus body rows
      expect(getAllByRole('row').length).toEqual(21);
      expect(getByTestId('table-row-14')).toBeInTheDocument();
    });
  });

  it('Filters commits list', async () => {
    const { getByLabelText, getByTestId, getByText, getAllByRole } = renderApp();

    userEvent.type(
      getByLabelText(/repository url/i),
      'https://github.com/amazing-user/amazing-repo',
    );

    userEvent.click(getByText(/load commits/i));

    await waitFor(() => {
      // First row result in table
      expect(getByTestId('table-row-0')).toBeInTheDocument();
    });

    userEvent.type(getByLabelText(/search/i), commitsResponse[0].sha);

    // Header row plus only row filtered
    expect(getAllByRole('row').length).toEqual(2);
  });

  it('Search an invalid url', async () => {
    const { getByLabelText, getByText } = renderApp();

    userEvent.type(getByLabelText(/repository url/i), 'an-invalid-url');

    userEvent.click(getByText(/load commits/i));

    expect(screen.getByText(/this url is not valid/i)).toBeInTheDocument();
  });

  it('Fails getting commits', async () => {
    const { getByLabelText, getByText } = renderApp();

    userEvent.type(
      getByLabelText(/repository url/i),
      'https://github.com/amazing-user/amazing-repo',
    );

    userEvent.click(getByText(/load commits/i));

    server.use(
      rest.get(`${baseUrl}/repos/*/commits`, (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByText(/we couldn’t get the commits for this repository/i),
      ).toBeInTheDocument();
    });
  });

  function renderApp() {
    return render(<App />);
  }
});
