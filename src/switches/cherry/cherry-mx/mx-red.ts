import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#C52224';
const COLOR_BASE = '#272728';

export default {
    model: 'Red',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'linear',
    spring: SpringStainlessSteel.Regular(),
    volume: 'low',
    lifetime: 50,
    lighting: 'none',
    mount: 'both',
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/b/7/a/b/b7ab2f72bd5686e1e1e759a9f3703536d7fb1e18/EN_CHERRY_MX_RED.pdf',
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE)),
    },
    force: {
        actuation: Force.Centinewton(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedCentinewton(64),
    },
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.Minus(0.4)),
    },
} satisfies Switch;
