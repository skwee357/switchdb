import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Choc V2',
    variation: 'Red',
    profile: 'low',
    stem: StemMX.Circular(Material.POM(Color.Opaque('#E83022'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    mount: undefined,
    lubrication: 'none',
    lighting: 'none',
    lifetime: 50,
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#040404')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG135301D01_Kailh_Choc_V2_Low_Profile_Red_Switch_03cd29a8-065e-45f8-8053-b72dcd70616d.pdf?v=1667190153',
    travel: {
        pre: Travel.Millimeter(1.3, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.2, Tolerance.Minus(0.25)),
    },
    force: {
        actuation: Force.GramForce(43, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
    },
} satisfies Switch;
