import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed',
    variation: 'Bronze',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#D56E35'))),
    type: 'clicky',
    volume: 'loud',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#EBE7DE')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D214_Kailh_Speed_Bronze_Switch_dd966b01-f797-46d2-a29f-e4b0f1076e87.pdf?v=1667190032',
    travel: {
        pre: Travel.Millimeter(1.1, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.5, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(96),
        tactile: Force.EstimatedGramForce(50),
    },
} satisfies Switch;
