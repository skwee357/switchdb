import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#DA0002';

export default {
    model: 'Red',
    stem: StemMX.Circular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'low',
    type: 'linear',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lifetime: 100,
    lighting: 'smd',
    mount: undefined,
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/b/3/1/e/b31ed369e2614b88503ba419d4e0a8339a7c55e5/Data%20sheet_MX1B-L2NA.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    force: {
        actuation: Force.Centinewton(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedCentinewton(80),
    },
    travel: {
        pre: Travel.Millimeter(1.2, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.2, Tolerance.PlusMinus(0.25)),
    },
} satisfies Switch;
