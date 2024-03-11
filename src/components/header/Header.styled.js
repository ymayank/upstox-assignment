import { StyleSheet } from "react-native";

import COLORS from "../../utils/Colors";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
});

export default Styles;
