export interface ThemeColors {
    primary: string,
    secondary: string,
    accent: string,
    background: string,

    text: string,
    mutedText: string,
    accentText: string,

    card: string,
    cardLight: string
};

export type MappedThemeKeys = (
    "--color-primary" |
    "--color-secondary" |
    "--color-accent" |

    "--color-text" |
    "--color-text-muted" |
    "--color-text-accent" |

    "--color-card" |
    "--color-card-light" |

    "--background"
); 

export type MappedTheme = Record<MappedThemeKeys, string>;

export interface Theme {
    name: string,
    colors: ThemeColors
};