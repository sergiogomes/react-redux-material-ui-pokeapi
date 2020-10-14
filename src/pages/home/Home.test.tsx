import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import ReduxProvider from '../../reduxProvider';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <Router>
        <Home />
      </Router>
    </ReduxProvider>,
  );
});

it('should render two buttons', () => {
  expect(wrapped.find('button').length).toEqual(2);
});
