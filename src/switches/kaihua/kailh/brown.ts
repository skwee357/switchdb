import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Brown',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#F5352A'))),
    type: 'tactile',
    volume: 'medium',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101S22_Kailh_Brown_Switch_2795858b-a9a9-418b-b422-eb904c6e5a97.pdf?v=1667196576',
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(4.0, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
