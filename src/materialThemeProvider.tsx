import React, { ReactNode, useState } from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  indigo,
  blue,
  pink,
  red
} from "@material-ui/core/colors";

interface IProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IProps) => {
  const [darkState] = useState(true);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? indigo[700] : blue[400];
  const mainSecondaryColor = darkState ? red[400] : pink[200];
  
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
