import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Deep Sea Silent Box',
    variation: 'Red (White Stem)',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Circular(Material.POM(Color.Opaque('#FFFFFF'))),
    spring: SpringStainlessSteel.Regular(),
    volume: 'silent',
    mount: '3pin',
    lighting: 'smd',
    lubrication: 'none',
    lifetime: 100,
    housing: {
        upper: Material.PC(Color.Opaque('#013FB1')),
        lower: Material.Nylon(Color.Opaque('#898BB2')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S77-1_Kailh_Deep_Sea_Silent_Box_Red_Switch_White_Stem_97a9bb2e-d15b-4976-80a1-e116d10b81bd.pdf?v=1667189187',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(68),
    },
} satisfies Switch;
