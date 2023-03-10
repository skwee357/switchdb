import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

const COLOR_STEM = '#B5B4B4';
const COLOR_BASE = '#272728';

export default {
    model: 'Ergo Clear',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'tactile',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lifetime: 50,
    mount: 'both',
    lubrication: 'none',
    lighting: 'in_switch',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/1/c/5/a/1c5a4970f347abf4682eebd3c7a6d43c00595599/Data_Sheet_CHERRY_MX_Ergo_Clear.pdf',
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE)),
    },
    force: {
        actuation: Force.Centinewton(40),
        bottom: Force.EstimatedCentinewton(70),
        tactile: Force.Centinewton(55),
    },
    travel: {
        pre: Travel.Millimeter(2),
        total: Travel.Millimeter(4),
        pressure: undefined,
    },
} satisfies Switch;
