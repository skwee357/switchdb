import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box Summer',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#DAE7B5'))),
    type: 'clicky',
    volume: 'loud',
    spring: SpringStainlessSteel.Regular(),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent('#61A3A7')),
        lower: Material.PC(Color.Transparent('#61A3A7')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(52),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(15)),
    },
} satisfies Switch;
