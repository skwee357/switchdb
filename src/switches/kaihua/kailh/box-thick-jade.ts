import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box Thick',
    variation: 'Jade',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#A2B68B'))),
    type: 'clicky',
    volume: 'loud',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#E0E1DB')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedGramForce(66),
        tactile: Force.GramForce(75, Tolerance.PlusMinus(15)),
    },
} satisfies Switch;
