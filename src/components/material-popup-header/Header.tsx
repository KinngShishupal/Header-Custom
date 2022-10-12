import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import { HeaderStyle } from "./ModalComponent";

// import { createTheme } from '@mui/material/styles';

interface HeaderProps {
  leftIcon?: React.ReactNode;
  onLeftPress: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  children: React.ReactNode;
  headerStyle?: HeaderStyle;
}

const Header: React.FC<HeaderProps> = (props) => {
  const {
    leftIcon = <CloseIcon />,
    onLeftPress,
    title,
    headerStyle,
    children,
  } = props;
  return (
    <>
      <AppBar position="static" style={headerStyle?.header}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onLeftPress}
            size="large"
          >
            {leftIcon}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            style={headerStyle?.title}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </>
  );
};

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

export default Header;
