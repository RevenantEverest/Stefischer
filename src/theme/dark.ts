import type { Theme, ThemeColors } from '@@types/theme';

const colors: ThemeColors = {
    primary: "#4D11D7",
    secondary: "#F26E3F",
    accent: "",
    background: "#1A1A1A",
    card: "#404040",
    cardLight: "",
    text: "#DEDEDE",
    mutedText: "#525252",
    accentText: "#F26E3F"
};

const darkTheme: Theme = {
    name: "dark",
    colors,
};

export default darkTheme;