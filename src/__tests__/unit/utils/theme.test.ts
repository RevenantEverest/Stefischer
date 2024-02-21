import * as themes from '@@theme';
import { theme as themeUtils } from '@@utils';

describe("Theme Utils", () => {
    describe("given a object of theme colors", () => {
        it("should return css variable mapped object", () => {
            const themeColors = themes.dark.colors;
            const mappedTheme = themeUtils.mapTheme(themeColors);

            expect(mappedTheme).toEqual({
                "--color-primary": themeColors.primary,
                "--color-secondary": themeColors.secondary,
                "--color-accent": themeColors.accent,
                
                "--color-text": themeColors.text,
                "--color-muted": themeColors.muted,
                "--color-text-accent": themeColors.accentText,
                
                "--color-card": themeColors.card,
                "--color-card-light": themeColors.cardLight,

                "--background": themeColors.background,
            });
        });
    });
});