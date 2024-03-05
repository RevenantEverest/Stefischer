import type { Theme, ThemeColors } from '@@types/theme';

const colors: ThemeColors = {
    primary: "#4D11D7",
    secondary: "#D25022",
    accent: "",
    background: "#f5f5f5",
    card: "#fafaf9",
    cardLight: "#ffffff",
    text: "#0a0a0a",
    muted: "#5a5a5a",
    accentText: "#F26E3F"
};

const lightTheme: Theme = {
    name: "light",
    colors
};

export default lightTheme;