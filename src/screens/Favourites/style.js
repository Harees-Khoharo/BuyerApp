import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  topRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.04,
    // backgroundColor:'blue'
  },
  topRowFirstSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.02,
  },
  imgSty2: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.05,
    // backgroundColor:'red'
  },
  topRowText: {
    color: colors.gray,
    marginLeft: sizes.screenWidth * 0.01,
    fontWeight: "bold",
  },
  topText: {
    color: colors.black,
    fontWeight: "bold",
    marginLeft: sizes.screenWidth * 0.055,
    fontSize: fontSize.h4,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.01,
    borderWidth: 1,
    width: sizes.screenWidth * 0.89,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.1,
    // alignSelf:'center'
  },
  searchImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.04,
    marginLeft: sizes.screenWidth * 0.01,
    // backgroundColor:'red'
  },
  searchImgSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.035,
    // backgroundColor:'red'
  },
  fieldSty: {
    color: colors.black,
    // backgroundColor:'red',
    width: sizes.screenWidth * 0.63,
    marginLeft: sizes.screenWidth * 0.04,
  },
  menuTopView: {
    marginHorizontal: sizes.screenWidth * 0.04,
  },
  menuMainCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizes.screenWidth * 0.01,
    marginTop: sizes.screenHeight * 0.02,
  },
  menuText: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
  },
  groceryView: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:1,
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.04,
    backgroundColor: "#827B7B",
    marginRight: sizes.screenWidth * 0.03,
  },
  groceryView1: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:1,
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.04,
    backgroundColor: colors.black,
    marginRight: sizes.screenWidth * 0.03,
  },
  menuIgm: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.16,
    height: sizes.screenWidth * 0.16,
    // backgroundColor:'red'
  },
  color: {
    color: colors.white,
    marginTop: sizes.screenHeight * 0.01,
  },
  sellingTopView: {
    marginRight: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.015,
  },
  sellingImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.24,
    borderRadius: sizes.screenWidth * 0.03,
    // backgroundColor:'red'
  },
  percentView: {
    backgroundColor: "red",
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.03,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenWidth * 0.05,
    position: "absolute",
    left: 9,
    top: 10,
  },
  newView: {
    backgroundColor: "black",
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.03,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.screenWidth * 0.05,
    position: "absolute",
    left: 9,
    top: 10,
  },
  closeView: {
    position: "absolute",
    right: sizes.screenWidth * 0.01,
  },
  percent: {
    color: colors.white,
    fontSize: fontSize.smallM,
  },
  heartImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
  },
  closeImg: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.06,
  },
  heartImgView: {
    position: "absolute",
    top: sizes.screenHeight * 0.213,
    left: sizes.screenWidth * 0.33,
  },
  ratingSty: {
    resizeMode: "contain",
    width: sizes.screenWidth * 0.28,
    height: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.01,
  },
  ratingText: {
    color: colors.disabledBg3,
  },
  ratingText1: {
    color: colors.black,
    fontWeight: "500",
    fontSize: fontSize.large,
  },
  ratingText2: {
    color: colors.disabledBg3,

    // fontWeight:'400'
    // textDecorationLine:"line-through"
  },
  ratingText3: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.01,
  },
  redText: {
    color: colors.red,
    marginLeft: sizes.screenWidth * 0.01,
    fontSize: fontSize.h6,
    fontWeight: "500",
  },
  ratingText4: {
    color: colors.black,
    fontWeight: "bold",
    // marginLeft:sizes.screenWidth * 0.01
  },
  sellingHeading: {
    color: colors.gray,
    fontSize: fontSize.large,
    marginTop: sizes.screenHeight * 0.01,
    fontWeight: "bold",
  },
  seeAll: {
    color: colors.white,
    backgroundColor: colors.black,
    width: sizes.screenWidth * 0.23,
    height: sizes.screenHeight * 0.03,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: sizes.screenWidth * 0.03,
  },
  productHeading: {
    color: "#4F4F4F",
    fontSize: fontSize.large,
    fontWeight: "500",
  },
  padding: {
    marginTop: sizes.screenHeight * 0.01,
  },
  top: {
    marginTop: sizes.screenHeight * 0.02,
  },
  options: {
    backgroundColor: colors.black,
    height: sizes.screenHeight * 0.045,
    width: sizes.screenWidth * 0.28,
    borderRadius: sizes.screenWidth * 0.3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: sizes.screenWidth * 0.03,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
  right: {
    marginRight: sizes.screenWidth * 0.02,
  },
  costText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: "500",
  },
  filterImg: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.06,
  },
  swap: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.06,
  },
  filterText: {
    color: colors.black,
    fontWeight: "500",
    left: sizes.screenWidth * 0.02,
    fontSize: fontSize.medium,
  },
});
