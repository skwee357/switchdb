import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Choc V2',
    variation: 'Brown',
    stem: StemMX.Circular(Material.POM(Color.Opaque('#613C32'))),
    profile: 'low',
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: undefined,
    lubrication: 'none',
    lighting: 'smd',
    lifetime: 50,
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#040404')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG135301D02_Kailh_Choc_V2_Low_Profile_Brown_Switch_828a8159-bda2-47ea-a12f-4da0c9767f5d.pdf?v=1667190177',
    travel: {
        pre: Travel.Millimeter(1.3, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.2, Tolerance.Minus(0.25)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(80),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
