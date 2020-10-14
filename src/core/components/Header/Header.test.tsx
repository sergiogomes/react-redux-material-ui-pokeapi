import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReduxProvider from '../../../reduxProvider';
import Header from './Header';

test('should render Poke API title', () => {
  const { getByText } = render(
    <ReduxProvider>
      <Router>
        <Header />
      </Router>
    </ReduxProvider>,
  );

  expect(getByText(/Poke API/i)).toBeInTheDocument();
});
