import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Red Bean Pudding Box',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#E3565F'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Short(),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent('#D6D6D6')),
        lower: Material.POM(Color.Opaque('#E9D3D7')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG1511F01S67_Kailh_Red_Bean_Pudding_Switch_cebdf07b-2ee1-468c-8ffe-1e43499ca09b.pdf?v=1667189524',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(58),
    },
} satisfies Switch;
