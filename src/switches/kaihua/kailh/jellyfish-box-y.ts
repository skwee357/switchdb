import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Jellyfish Box',
    variation: 'Y Linear',
    profile: 'regular',
    stem: StemMX.Circular(Material.Nylon(Color.Transparent())),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Long(),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 100,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent()),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG1511F01S70-1_Kailh_Jellyfish_Box_Switch-_Y_Switch_Linear_5eec871b-8da6-479d-821d-d8bb2d2fa335.pdf?v=1667189358',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(60),
    },
} satisfies Switch;
