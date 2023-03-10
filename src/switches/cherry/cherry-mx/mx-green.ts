import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#3C854D';
const COLOR_BASE = '#272728';

export default {
    model: 'Green',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'clicky',
    spring: SpringStainlessSteel.Regular(),
    volume: 'loud',
    lifetime: 50,
    lighting: 'none',
    mount: 'both',
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/a/a/3/1/aa31c11f193a199eea05c8897d9decc539ce9b7f/EN_CHERRY_MX_GREEN.pdf',
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE)),
    },
    force: {
        actuation: Force.Centinewton(70, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedCentinewton(88),
        tactile: Force.Centinewton(80, Tolerance.PlusMinus(20)),
    },
    travel: {
        pre: Travel.Millimeter(2.2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.Minus(0.5)),
        pressure: undefined,
    },
} satisfies Switch;
