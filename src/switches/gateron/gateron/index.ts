import { Brand } from '../../../switch';
import babyKangaroo from './baby-kangaroo';
import babyRaccoon from './baby-raccoon';
import boxInkV2Black from './box-ink-v2-black';
import boxInkV2Pink from './box-ink-v2-pink';
import kangarooBoxInk59 from './kangaroo-box-ink-59';
import kangarooBoxInk63 from './kangaroo-box-ink-63';
import oilKing from './oil-king';

export default {
    name: 'Gateron',
    switches: [
        // regular
        babyKangaroo,
        babyRaccoon,
        oilKing,
        boxInkV2Pink,
        boxInkV2Black,
        kangarooBoxInk59,
        kangarooBoxInk63,
    ],
} satisfies Brand;
