import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Jellyfish Box',
    variation: 'X Clicky',
    profile: 'regular',
    stem: StemMX.Circular(Material.Nylon(Color.Transparent())),
    type: 'clicky',
    volume: 'loud',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG1511F01S80-1_Kailh_Jellyfish_Box_Switch-_X_Switch_Clicky_7a97d194-86c1-4e61-9759-7ac5ec3e1f1b.pdf?v=1667189380',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(47, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(50),
        tactile: Force.GramForce(57, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
