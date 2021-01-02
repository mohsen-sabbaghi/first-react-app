import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";
import palette from "./palette";

const theme = createMuiTheme({
    palette: palette,
    spacing: 3,
    direction: "rtl",
    typography: {
        allVariants: {
            fontFamily: "cursive"
        },
        h1: {
            fontSize: 25
        }
    }
})
export default responsiveFontSizes(theme);