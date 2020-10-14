import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import NewGame from './NewGame';
import ReduxProvider from '../../reduxProvider';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <NewGame />
    </ReduxProvider>,
  );
});

it('should render one h3', () => {
  expect(wrapped.find('h3').length).toEqual(1);
});

it('should contain new game title', () => {
  expect(wrapped.render().text()).toContain('New Game');
});
