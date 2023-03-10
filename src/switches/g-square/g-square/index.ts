import { Brand } from '../../../switch';
import dreamlandClicky from './dreamland-clicky';
import dreamlandLinear from './dreamland-linear';
import whiteSamurai from './white-samurai';

export default {
    name: 'G-Square',
    switches: [dreamlandClicky, dreamlandLinear, whiteSamurai],
} satisfies Brand;
