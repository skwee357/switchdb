import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

const COLOR_STEM = '#B5B4B4';

export default {
    model: 'Ergo Clear',
    variation: 'RGB',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'tactile',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lighting: 'smd',
    mount: 'both',
    lubrication: 'none',
    lifetime: 50,
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/1/c/5/a/1c5a4970f347abf4682eebd3c7a6d43c00595599/Data_Sheet_CHERRY_MX_Ergo_Clear.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
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
