import React, { ReactNode, useState } from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";

interface IProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IProps) => {
  const [darkState] = useState(false);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ReduxProvider;
