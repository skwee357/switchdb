import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR = '#272728';

export default {
    model: 'Black',
    variation: 'RGB',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR))),
    profile: 'regular',
    type: 'linear',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lubrication: 'none',
    mount: 'both',
    lighting: 'smd',
    lifetime: 100,
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/0/7/f/6/07f6a966a4b95053db5691e73faa401f67d2eb5e/EN_CHERRY_MX_BLACK.pdf',
    force: {
        actuation: Force.Centinewton(60, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedCentinewton(84),
    },
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.Minus(0.4)),
    },
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
} satisfies Switch;
