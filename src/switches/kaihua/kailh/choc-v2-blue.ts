import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Choc V2',
    variation: 'Blue',
    stem: StemMX.Circular(Material.POM(Color.Opaque('#00A6D1'))),
    profile: 'low',
    type: 'clicky',
    volume: 'loud',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG135301D03_Kailh_Choc_V2_Low_Profile_Blue_Switch_022d9ea3-b2ab-4bf7-8b3a-3fb2aafe5705.pdf?v=1667190197',
    travel: {
        pre: Travel.Millimeter(1.3, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.2, Tolerance.Minus(0.25)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(58, Tolerance.PlusMinus(13)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
