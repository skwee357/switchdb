import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#EB7176';

export default {
    model: 'Silent Red',
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
        'https://www.cherrymx.de/_Resources/Persistent/9/8/d/c/98dc07c393ba6be617c8547b77371709063605ad/EN_CHERRY_MX_SILENT_RED.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    force: {
        actuation: Force.Centinewton(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedCentinewton(58),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.7, Tolerance.Minus(0.4)),
    },
} satisfies Switch;
