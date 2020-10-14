import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

interface IProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
