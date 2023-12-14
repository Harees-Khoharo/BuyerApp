import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  mainContainer: {
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  headingSty: {
    color: colors.black,
    fontWeight: "600",
    marginTop: sizes.screenHeight * 0.05,
  },
  headingSty2: {
    color: colors.black,
    marginLeft: sizes.screenHeight * 0.01,
  },
  card: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.29,
    marginTop: sizes.screenHeight * 0.01,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.01,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.025,
    marginLeft: sizes.screenHeight * 0.03,
  },
  checkBox: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.05,
  },
  plusImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.11,
    height: sizes.screenWidth * 0.11,
    left: sizes.screenWidth * 0.74,
    bottom: sizes.screenWidth * 0.02,
  },
  modalBody: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: "center",
    justifyContent: "flex-end",
  },

  modalMainView: {
    backgroundColor: "blue",
    alignSelf: "center",
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.8,
    borderTopLeftRadius: sizes.screenHeight * 0.04,
    borderTopRightRadius: sizes.screenHeight * 0.04,
    backgroundColor: colors.bglightblue,
  },
  horizontalLine: {
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.007,
    backgroundColor: colors.disabledBg2,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: sizes.screenHeight * 0.015,
  },
  modalHeading: {
    alignSelf: "center",
    color: colors.black,
    marginTop: sizes.screenHeight * 0.03,
    fontSize: fontSize.large,
  },
  modalInputField: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.9,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.03,
  },
  modalInputField2: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.9,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.03,
    flexDirection: "row",
  },
  textInputField: {
    color: colors.black,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.75,
    margin: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.06,
    // backgroundColor:'red',
  },
  textInputField2: {
    color: colors.black,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.6,
    marginLeft: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.025,
    fontSize: fontSize.medium,
    // backgroundColor:'red'
  },
  inputFieldLabel: {
    color: colors.disabledBg3,
    marginLeft: sizes.screenWidth * 0.07,
    marginTop: sizes.screenWidth * 0.03,
    fontSize: fontSize.small,
    position: "absolute",
    // backgroundColor:'blue'
  },
  imageSize: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.05,
    marginLeft: sizes.screenWidth * 0.11,
    alignSelf: "center",
    // position:'absolute'
  },
  modalBottomBtn: {
    textAlignVertical: "center",
    textAlign: "center",
    marginLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.black,
    width: sizes.screenHeight * 0.46,
    alignItems: "center",
    paddingTop: sizes.screenHeight * 0.015,
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "500",
    marginLeft: sizes.screenWidth * 0.02,
  },
});
