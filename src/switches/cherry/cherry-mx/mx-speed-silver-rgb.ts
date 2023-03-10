import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#7C7B7C';

export default {
    model: 'Speed Silver',
    variation: 'RGB',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'linear',
    spring: SpringStainlessSteel.Regular(),
    volume: 'low',
    lifetime: 100,
    lighting: 'smd',
    mount: 'both',
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/7/f/4/5/7f45a95bf2bd93bd9c94f1835bd0c89dd6863326/EN_CHERRY_MX_SPEED_Silver.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    force: {
        actuation: Force.Centinewton(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedCentinewton(80),
    },
    travel: {
        pre: Travel.Millimeter(1.2, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.4, Tolerance.Minus(0.4)),
    },
} satisfies Switch;
