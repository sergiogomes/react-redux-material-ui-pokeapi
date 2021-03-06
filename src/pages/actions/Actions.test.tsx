import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Actions from './Actions';
import ReduxProvider from '../../reduxProvider';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <Router>
        <Actions />
      </Router>
    </ReduxProvider>,
  );
});

it('should contain the question what are you going to do next?', () => {
  const question = 'What are you going to do next?';
  expect(wrapped.render().text()).toContain(question);
});
