import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#BFBCBC';
const COLOR_BASE = '#272728';

export default {
    model: 'Clear',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'tactile',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lifetime: 50,
    lighting: 'none',
    mount: 'both',
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/1/e/6/d/1e6d4479ea3c692473ae8dd3f0b825bd568ecadb/EN_CHERRY_MX_CLEAR.pdf',
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE)),
    },
    force: {
        actuation: Force.Centinewton(55, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedCentinewton(95),
        tactile: Force.Centinewton(65, Tolerance.PlusMinus(20)),
    },
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.PlusMinus(0.5)),
        pressure: undefined,
    },
} satisfies Switch;
