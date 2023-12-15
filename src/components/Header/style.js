import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white",
    marginTop: sizes.screenHeight * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.04,
    
  },
  imgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.04,
  },
  cartImgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.07,
    height: sizes.screenWidth * 0.07,
  },
  headerText: {
    fontSize: fontSize.large,
    fontWeight: "bold",
    color: colors.black,
  },
});
