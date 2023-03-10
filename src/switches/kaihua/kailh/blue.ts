import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Blue',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#F5352A'))),
    type: 'clicky',
    volume: 'loud',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#F0E6DC')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101S14_Kailh_Blue_Switch_fab071de-1d06-42b8-ae33-75043da0c4ac.pdf?v=1667196616',
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(4.0, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
