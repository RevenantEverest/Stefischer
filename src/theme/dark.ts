import type { Theme, ThemeColors } from '@@types/theme';

const colors: ThemeColors = {
    primary: "#4D11D7",
    secondary: "#D25022",
    accent: "",
    background: "#1A1A1A",
    card: "#2A2A2A",
    cardLight: "#3A3A3A",
    text: "#DEDEDE",
    muted: "#7C7C7C",
    accentText: "#F26E3F"
};

const darkTheme: Theme = {
    name: "dark",
    colors,
};

export default darkTheme;