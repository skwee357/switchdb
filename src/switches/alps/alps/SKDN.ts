import {
    Material,
    SpringStainlessSteel,
    type Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'SKDN Brown',
    variation: '69g',
    profile: 'regular',
    stem: 'alps mount',
    mount: 'alps',
    type: 'tactile',
    lifetime: 50,
    lighting: 'none',
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    spring: SpringStainlessSteel.Regular('gold'),
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_OTHER)),
        lower: Material.Unspecified(Color.Opaque(COLOR_OTHER)),
    },
    force: {
        bottom: undefined,
        actuation: Force.GramForce(60),
    },
    travel: {
        pre: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.2)),
        total: undefined,
    },
} satisfies Switch;
