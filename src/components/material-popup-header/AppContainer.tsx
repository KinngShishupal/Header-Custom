import React, { MouseEventHandler } from "react";
import Header from "./Header";
import { HeaderStyle } from "./ModalComponent";

interface AppcontainerProps {
  children: React.ReactNode;
  onLeftPress: MouseEventHandler<HTMLButtonElement>;
  onRightPress?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  headerStyle?: HeaderStyle;
}

const AppContainer: React.FC<AppcontainerProps> = (props) => {
  const {
    onLeftPress,
    onRightPress,
    title,
    leftIcon,
    rightIcon,
    headerStyle,
    children,
  } = props;

  return (
    <Header
      leftIcon={leftIcon}
      onLeftPress={onLeftPress}
      onRightPress={onRightPress}
      rightIcon={rightIcon}
      title={title}
      headerStyle={headerStyle}
    >
      {children}
    </Header>
  );
};
export default AppContainer;
