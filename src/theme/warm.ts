import type { Theme, ThemeColors } from '@@types/theme';

const colors: ThemeColors = {
    primary: "#D24545",
    secondary: "#E6BAA3",
    accent: "",
    background: "#A94438",
    card: "#D24545",
    cardLight: "#f0d6ec",
    text: "#dedede",
    muted: "#ACACAC",
    accentText: "#F26E3F"
};

const warmTheme: Theme = {
    name: "warm",
    colors,
};

export default warmTheme;