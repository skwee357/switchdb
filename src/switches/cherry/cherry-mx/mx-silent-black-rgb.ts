import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#717A7A';

export default {
    model: 'Silent Black',
    variation: 'RGB',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'linear',
    spring: SpringStainlessSteel.Regular(),
    volume: 'silent',
    lighting: 'smd',
    mount: 'both',
    lubrication: 'none',
    lifetime: 50,
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/8/9/4/5/8945e4291a811c540f5c3e1ae4b3fc47e4011a8a/EN_CHERRY_MX_SILENT_BLACK.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    force: {
        actuation: Force.Centinewton(60, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedCentinewton(86),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.7, Tolerance.Minus(0.4)),
    },
} satisfies Switch;
