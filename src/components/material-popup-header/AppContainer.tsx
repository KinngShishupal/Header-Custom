import React, { MouseEventHandler } from "react";
// import { StyleSheet, SafeAreaView, View } from "react-native";
// import { useTheme } from "react-native-paper";
// import PropTypes from "prop-types";
import Header from "./Header";
import { HeaderStyle } from "./ModalComponent";
// import { IconStyle } from "./ModalComponent";

interface AppcontainerProps {
  children: React.ReactNode;
  onLeftPress: MouseEventHandler<HTMLButtonElement>;
  title: string;
  leftIcon?: React.ReactNode;
  headerStyle?: HeaderStyle;
}

const AppContainer: React.FC<AppcontainerProps> = (props) => {
  const { onLeftPress, title, leftIcon, headerStyle, children } = props;
  //   const theme = useTheme();
  return (
    // <SafeAreaView
    //   style={[styles.container, { backgroundColor: theme.colors.background }]}
    // >

    <Header
      leftIcon={leftIcon}
      onLeftPress={onLeftPress}
      title={title}
      headerStyle={headerStyle}
    >
      {children}
    </Header>

    // </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: "100%",
//   },
//   content: { flex: 1 },
// });

export default AppContainer;
