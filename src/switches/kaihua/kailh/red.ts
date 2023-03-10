import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Red',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#F5352A'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#F0E6DC')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101S21_Kailh_Red_Switch_b6770d67-8f51-48d9-9ec1-45442f4de278.pdf?v=1667196539',
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(4.0, Tolerance.Minus(0.4)),
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
    },
} satisfies Switch;
