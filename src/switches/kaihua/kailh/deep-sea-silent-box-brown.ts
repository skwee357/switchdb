import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Deep Sea Silent Box',
    variation: 'Brown',
    profile: 'regular',
    stem: StemMX.Circular(Material.POM(Color.Opaque('#895041'))),
    type: 'tactile',
    volume: 'silent',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lubrication: 'none',
    lifetime: 100,
    housing: {
        upper: Material.PC(Color.Opaque('#013FB1')),
        lower: Material.Nylon(Color.Opaque('#898BB2')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S95_Kailh_Deep_Sea_Silent_Box_Brown_Switch_33a44def-94d4-4c7e-a220-869fac691318.pdf?v=1667189237',
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
