import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#EB7176';
const COLOR_BASE = '#272728';

export default {
    model: 'Silent Red',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'linear',
    spring: SpringStainlessSteel.Regular(),
    volume: 'silent',
    lifetime: 50,
    lighting: 'none',
    mount: 'both',
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/9/8/d/c/98dc07c393ba6be617c8547b77371709063605ad/EN_CHERRY_MX_SILENT_RED.pdf',
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE)),
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
