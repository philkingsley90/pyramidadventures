import { createMuiTheme } from "@material-ui/core/styles";

const fontFamily = "'Montserrat', sans-serif";

const colors = {
  yellow: {
    main: "#c69f4c",
  },
  green: {
    main: "#5e643c",
  },
  pink: {
    main: "#b38995",
  },
  blue: {
    main: "#97cbbe",
  },
  red: {
    main: "#9b5d3d",
  },
  white: {
    main: "#ffffff",
  },
  black: {
    main: "#000000",
  },
  grey: {
    main: "#666",
  },
};

const text = {
  grey: {
    color: colors.grey.main,
    lineHeight: "1.8",
    "& a": {
      color: colors.pink.main,
      fontWeight: 700,
    },
  },
  white: {
    color: colors.white.main,
    lineHeight: "1.8",
    "& a": {
      color: colors.white.main,
      fontWeight: 700,
    },
  },
  blue: {
    color: colors.blue.main,
    lineHeight: "1.8",
    "& a": {
      color: colors.green.main,
      fontWeight: 700,
    },
  },
};

const sectionDefaults = {
  padding: "40px 0 40px 0",
};

const sectionColours = {
  yellow: {
    ...sectionDefaults,
    backgroundColor: colors.yellow.main,
    ...text.grey,
  },
  white: {
    ...sectionDefaults,
    backgroundColor: colors.white.main,
    ...text.grey,
  },
  pink: {
    ...sectionDefaults,
    backgroundColor: colors.pink.main,
    ...text.white,
  },
  red: {
    ...sectionDefaults,
    backgroundColor: colors.red.main,
    ...text.white,
  },
  green: {
    ...sectionDefaults,
    backgroundColor: colors.green.main,
    ...text.white,
  },
  blue: {
    ...sectionDefaults,
    backgroundColor: colors.blue.main,
    ...text.grey,
  },
  black: {
    ...sectionDefaults,
    backgroundColor: colors.black.main,
    ...text.white,
  },
};

const sections = {
  primary: sectionColours.blue,
  secondary: sectionColours.pink,
  tertiary: sectionColours.green,
  feedback: {
    ...sectionColours.white,
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 0,
  },
  instagram: {
    ...sectionColours.white,
  },
  navBar: {
    ...sectionColours.white,
    padding: 0,
  },
  footer: {
    ...sectionColours.green,
    padding: 0,
  },
};

const defaultTheme = createMuiTheme({});
const { breakpoints } = defaultTheme;

const theme = createMuiTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: colors.yellow.main,
    },
    secondary: {
      main: colors.pink.main,
    },
    error: {
      main: colors.red.main,
    },
    warning: {
      main: colors.pink.main,
    },
    info: {
      main: colors.blue.main,
    },
    success: {
      main: colors.pink.main,
    },
  },
  typography: {
    fontFamily: fontFamily,
    lineHeight: "1.8",
    fontWeight: 400,
    h1: {
      textTransform: "uppercase",
      fontSize: "2.4rem",
      fontWeight: 700,
      letterSpacing: "6px",
      padding: "5px",
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem",
      },
    },
    h2: {
      textTransform: "uppercase",
      letterSpacing: "4px",
      fontSize: "2.2rem",
      fontWeight: 700,
      [breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
    },
    h3: {
      letterSpacing: "2px",
      fontSize: "1.8rem",
      fontWeight: 700,
      [breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
    },
    subtitle1: {
      // textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: "2.0rem",
      fontWeight: 400,
      [breakpoints.down("xs")]: {
        fontSize: "1.2rem",
      },
    },
    subtitle2: {
      // textTransform: "uppercase",
      letterSpacing: 0,
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      fontWeight: 400,
      "& a": {
        color: colors.pink.main,
        fontWeight: "400",
      },
    },
    body2: {
      fontSize: "1.0rem",
      lineHeight: "1.6",
      fontWeight: 400,
      "& a": {
        color: colors.pink.main,
        fontWeight: 700,
      },
    },
    button: {
      fontWeight: 700,
      // fontFamily: buttonFontFamily,
      // fontSize: "2rem",
      letterSpacing: "1.5px",
      lineHeight: 2,
    },
  },
  sections: sections,
});

export default theme;
export { fontFamily };
