import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR = '#EDE4D8';

export default {
    model: 'Box Cream',
    variation: 'Pro',
    profile: 'regular',
    stem: StemMX.Circular(Material.POM(Color.Opaque(COLOR))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Long(),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 50,
    lubrication: 'factory',
    housing: {
        upper: Material.POM(Color.Opaque(COLOR)),
        lower: Material.POM(Color.Opaque(COLOR)),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S138_Kailh_Box_Cream_Pro_Switch_b5800c50-a870-44c6-b765-6b21483dc4bb.pdf?v=1667190308',
    travel: {
        pre: Travel.Millimeter(1.7, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(52),
    },
} satisfies Switch;
