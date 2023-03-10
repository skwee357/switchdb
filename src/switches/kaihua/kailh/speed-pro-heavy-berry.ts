import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed Pro Heavy',
    variation: 'Berry',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#8B4747'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#E2DDD1')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D231_Kailh_Speed_Pro_Heavy_Berry_Switch_121ddbf3-ca91-4ba2-bd61-01e2a906c81d.pdf?v=1667190402',
    travel: {
        pre: Travel.Millimeter(1.7, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.6)),
    },
    force: {
        actuation: Force.GramForce(70, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(100),
    },
} satisfies Switch;
