import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { indigo, blue, pink, red } from "@material-ui/core/colors";

import { selectDarkState } from "../core/components/header/headerSlice";

interface IProps {
  children: ReactNode;
}

const MaterialThemeProvider = ({ children }: IProps) => {
  const darkState = useSelector(selectDarkState);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? indigo[500] : blue[400];
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
    },
    spacing: factor => `${0.25 * factor}rem`,
  });

  return <ThemeProvider theme={darkTheme}><CssBaseline />{children}</ThemeProvider>;
};

export default MaterialThemeProvider;
