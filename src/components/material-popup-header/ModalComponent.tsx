import React, { MouseEventHandler } from "react";
import AppContainer from "./AppContainer";
import CustomModal from "./Modal";

export interface HeaderStyle {
  header?: React.CSSProperties;
  title?: React.CSSProperties;
}

interface ModalComponentProps {
  open: boolean;
  headerTitle: string;
  onLeftPress: MouseEventHandler<HTMLButtonElement>;
  onRightPress?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  lg?: number;
  md?: number;
  xs?: number;
  sm?: number;
  style?: React.CSSProperties;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  headerStyle?: HeaderStyle;
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const {
    open,
    headerTitle,
    onLeftPress,
    onRightPress,
    children,
    lg = 8,
    md = 8,
    xs = 8,
    sm = 8,
    style,
    leftIcon,
    headerStyle,
    rightIcon,
  } = props;

  if (!open) {
    return <></>;
  }

  return (
    <CustomModal lg={lg} md={md} xs={xs} sm={sm} open={open} style={style}>
      <AppContainer
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        title={headerTitle}
        onLeftPress={onLeftPress}
        onRightPress={onRightPress}
        headerStyle={headerStyle}
      >
        {children}
      </AppContainer>
    </CustomModal>
  );
};

export default ModalComponent;
