import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import { HeaderStyle } from "./ModalComponent";

interface HeaderProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress: React.MouseEventHandler<HTMLButtonElement>;
  onRightPress?: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  children: React.ReactNode;
  headerStyle?: HeaderStyle;
}

const Header: React.FC<HeaderProps> = (props) => {
  const {
    leftIcon = <CloseIcon />,
    rightIcon,
    onLeftPress,
    onRightPress,
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
            aria-label="left-icon"
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
          {rightIcon && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="right-icon"
              sx={{ mr: 2 }}
              onClick={onRightPress}
              size="large"
            >
              {rightIcon}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </>
  );
};

export default Header;
