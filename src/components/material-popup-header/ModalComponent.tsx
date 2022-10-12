// initial component

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
  handleClose: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  lg?: number;
  md?: number;
  xs?: number;
  sm?: number;
  style?: React.CSSProperties;
  leftIcon?: React.ReactNode;
  headerStyle?: HeaderStyle;
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const {
    open,
    headerTitle,
    handleClose,
    children,
    lg = 8,
    md = 8,
    xs = 8,
    sm = 8,
    style,
    leftIcon,
    headerStyle,
  } = props;

  if (!open) {
    return <></>;
  }

  return (
    <CustomModal
      lg={lg}
      md={md}
      xs={xs}
      sm={sm}
      open={open}
      handleClose={handleClose}
      style={style}
    >
      <AppContainer
        leftIcon={leftIcon}
        title={headerTitle}
        onLeftPress={handleClose}
        headerStyle={headerStyle}
        // children={children}
      >
        {/* <FormScroll contentContainerStyle={{ flexGrow: 1 }}> */}
        {children}
        {/* </FormScroll> */}
      </AppContainer>
    </CustomModal>
  );
};
// ModalComponent.propTypes = propTypes;
// ModalComponent.defaultProps = defaultProps;

export default ModalComponent;
