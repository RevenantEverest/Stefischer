import { youtube } from '@@utils';

describe("YouTube Regex Utils", () => {
    describe("given a list of YouTube domains", () => {
        it("should properly parse if link is valid", () => {
            const youtubeLinks = [
                "https://www.youtube.com/watch?v=tRgl-78sDX2",
                "https://youtu.be/6DzSAaNQHR8"
            ];

            for(let i = 0; i < youtubeLinks.length; i++) {
                expect(youtube.isValidLink(youtubeLinks[i])).toBe(true);
            }

            expect(youtube.isValidLink("https://google.com/watch?v=asdafkjwe")).toBe(false);
        });
    });
});