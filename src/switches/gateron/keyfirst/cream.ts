import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Cream',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#F6F6BF'))),
    lighting: undefined,
    spring: SpringStainlessSteel.Regular(),
    lubrication: 'self',
    datasheet: undefined,
    volume: undefined,
    lifetime: 50,
    mount: '5pin',
    housing: {
        upper: Material.Unspecified(Color.Opaque('#FFCED8')),
        lower: Material.Unspecified(Color.Opaque('#85C1A1')),
    },
    force: {
        bottom: Force.GramForce(62, Tolerance.PlusMinus(15)),
        actuation: undefined,
    },
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.PlusMinus(0.4)),
    },
} satisfies Switch;
