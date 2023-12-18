import { Dimensions, StyleSheet } from "react-native";
import { BLACK, YELLOW } from "./colors";

export const HEIGHT:number = Dimensions.get("screen").height;
export const WIDTH:number = Dimensions.get("screen").width;
export const FONT_MEDIUM:number = 18;
export const FONT_LARGE:number = 24;

export const rootStyles = StyleSheet.create({
    root: {
        width: WIDTH,
        height: HEIGHT,
        margin: 0,
        padding: 0,
    }
})
export const splashScreenStyles = StyleSheet.create({
    root: {
        width: WIDTH,
        height: HEIGHT,
        margin: 0,
        padding: 0,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:BLACK
    },
    rootImage: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.2
    },
    rootLoader: {
        marginTop: 50,
        height: 40
    }
})