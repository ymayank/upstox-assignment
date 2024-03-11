import { StyleSheet, Dimensions } from "react-native";

import COLORS from "../../utils/Colors";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREY,
  },
  flatListContainer: {
    backgroundColor: COLORS.WHITE,
  },
  card: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  itemSeparator: {
    width: Dimensions.get("window").width - 24,
    height: 1,
    backgroundColor: COLORS.GREY,
    marginHorizontal: 12,
  },
  cardSymbol: {
    fontWeight: "bold",
  },
  bottomSection: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  profileLossRow: {
    marginTop: 20,
  },
  arrow: {
    alignSelf: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: COLORS.PRIMARY_PURPLE,
  },
  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
});

export default Styles;
