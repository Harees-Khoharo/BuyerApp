import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  Ratingrow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.05,
  },
  ratingText: {
    color: colors.black,
    fontSize: fontSize.h2,
    fontWeight: "500",
  },
  ratingText1: {
    color: colors.disabledBg3,
    right: sizes.screenWidth * 0.01,
  },
  ratingImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.7,
    height: sizes.screenHeight * 0.15,
    // backgroundColor:'red'
  },
  reviewText2: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: "500",
  },
  reView: {
    padding: sizes.screenWidth * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },
  noWithPhoto: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.3,
  },
  withPhoto: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.3,
  },
  imageLeft: {
    left: sizes.screenWidth * 0.4,
    alignSelf: "center",
  },
  kinStyle: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  month: {
    color: colors.disabledBg3,
    fontSize: fontSize.small,
  },
  showPhotoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  starSiz: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.02,
    // backgroundColor:'red'
  },
  mainReviewBox: {
    borderRadius: sizes.screenWidth * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 8,
    backgroundColor: "white",

    width: sizes.screenWidth * 0.9,
    alignSelf: "center",
    // overflow:'hidden',
    paddingBottom: sizes.screenHeight * 0.03,
    top: sizes.screenHeight * 0.04,
    marginBottom: sizes.screenHeight * 0.07,
  },
  textColor: {
    color: colors.disabledBg3,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
  },
  photo: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.15,
    marginRight: sizes.screenWidth * 0.02,
  },
  imgRow: {
    flexDirection: "row",
    paddingLeft: sizes.screenWidth * 0.07,
  },
  helpfulView: {
    alignSelf: "flex-end",
    top: sizes.screenHeight * 0.01,
  },
  helpfulBtn: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.2,
  },
  avatar: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.15,
    bottom: sizes.screenHeight * 0.19,
    position: "absolute",
    left: sizes.screenWidth * -0.02,
  },
  avatar2: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.15,
    bottom: sizes.screenHeight * 0.26,
    position: "absolute",
    left: sizes.screenWidth * -0.02,
  },
  writeReview: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.4,
  },
  reviewBtn: {
    bottom: sizes.screenHeight * 0.1,
    left: sizes.screenWidth * 0.58,
  },
  mainModal: {
    backgroundColor: "#F9F9F9",
    height: sizes.screenHeight * 0.7,
    borderTopRightRadius: sizes.screenWidth * 0.08,
    borderTopLeftRadius: sizes.screenWidth * 0.08,
    width: sizes.screenWidth,
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.3,
  },
  modalFirstView: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: sizes.screenHeight * 0.033,
    marginBottom: sizes.screenHeight * 0.01,
  },
  modalFirstViewText: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: "bold",
    marginTop: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.6,
    textAlign: "center",
  },
  modalSecondView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: sizes.screenHeight * 0.02,
  },
  modalBtn: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: "bold",
  },
  modalBtn1: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "500",
  },
  modalBtnView: {
    width: sizes.screenWidth * 0.32,
    height: sizes.screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.05,
  },
  modalBtnView1: {
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.06,
    top: sizes.screenHeight * 0.05,
  },
  line: {
    height: sizes.screenHeight * 0.007,
    width: sizes.screenWidth * 0.11,
    borderRadius: sizes.screenWidth * 0.02,
    backgroundColor: "#C4C4C4",
    marginBottom: sizes.screenHeight * 0.01,
    bottom: sizes.screenHeight * 0.01,
  },
  input: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    color: colors.black,
    alignSelf: "center",
    padding: sizes.screenHeight * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 2,
    marginBottom: sizes.screenHeight * 0.05,
    marginTop: sizes.screenHeight * 0.02,
  },
  cameraBtn: {
    resizeMode: "contain",
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.1,
    left: sizes.screenWidth * 0.1,
  },
  cameraBtnText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    left: sizes.screenWidth * 0.02,
  },
});
