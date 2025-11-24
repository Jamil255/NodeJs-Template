import { get, isObject, isString, replace } from 'lodash';
import lang from '../lang';

export default (type, key, replacement) => {
    let text = get(lang[type], key);

    if (replacement && isObject(replacement)) {
        for (const i in replacement) {
            if (isString(replacement[i])) {
                text = replace(text, new RegExp(i, 'g'), replacement[i]);
            }
        }
    }

    return text;
};
