import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Crystal Burgundy Pro Linear',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#954465'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Long('gold'),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 50,
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent()),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG151101S128_Kailh_Crystal_Burgundy_Pro_Linear_Switch.pdf?v=1665218209',
    travel: {
        pre: Travel.Millimeter(1.3, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.4, Tolerance.PlusMinus(0.4)),
    },
    force: {
        actuation: Force.GramForce(37, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(48),
    },
} satisfies Switch;
