import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Pro',
    variation: 'Burgundy',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#88001A'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#E7E1D7')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D221_Kailh_Pro_Burgundy_Switch_6c242989-f2fb-4cb4-abee-13fd992511f7.pdf?v=1667190589',
    travel: {
        pre: Travel.Millimeter(1.7, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.6)),
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
    },
} satisfies Switch;
