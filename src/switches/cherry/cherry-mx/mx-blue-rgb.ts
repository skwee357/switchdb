import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#40A6F7';

export default {
    model: 'Blue',
    variation: 'RGB',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'clicky',
    spring: SpringStainlessSteel.Regular(),
    volume: 'loud',
    lifetime: 50,
    lighting: 'smd',
    lubrication: 'none',
    mount: 'both',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/a/5/3/1/a531cb6598bc849cbcf131fd7a31814282b74545/EN_CHERRY_MX_BLUE.pdf',
    force: {
        actuation: Force.Centinewton(50, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedCentinewton(60),
        tactile: Force.Centinewton(60, Tolerance.PlusMinus(15)),
    },
    travel: {
        pre: Travel.Millimeter(2.2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.Minus(0.5)),
        pressure: undefined,
    },
} satisfies Switch;
