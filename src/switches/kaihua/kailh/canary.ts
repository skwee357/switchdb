import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Canary Tactile',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#6E7575'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 20,
    lubrication: 'self',
    housing: {
        upper: Material.POM(Color.Opaque('#FAD55C')),
        lower: Material.POM(Color.Opaque('#7FAA80')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(42, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
