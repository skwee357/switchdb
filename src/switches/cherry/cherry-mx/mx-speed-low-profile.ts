import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#989997';

export default {
    model: 'Speed',
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
        'https://www.cherrymx.de/_Resources/Persistent/6/7/d/f/67df5e072fb240d5e5c6bb1c132eaf213ef04981/Data%20sheet_MX1B-52NA.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    force: {
        actuation: Force.Centinewton(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedCentinewton(80),
    },
    travel: {
        pre: Travel.Millimeter(1, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.2, Tolerance.PlusMinus(0.25)),
    },
} satisfies Switch;
