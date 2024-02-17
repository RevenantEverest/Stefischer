import * as regex from './regex';

export function isValidLink(str: string): boolean {
    const re = new RegExp(regex.youtube);
    return re.test(str);
};