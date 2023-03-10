import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Crystal Royal Box',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#8051AF'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent()),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S15-C_Kailh_Crystal_Royal_Box_Tactile_Switch_79aab920-5f82-4819-a257-74c958654934.pdf?v=1667190263',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(75, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
