import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed',
    variation: 'Silver',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#AAB0B3'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#EBE7DE')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D212_Kailh_Speed_Silver_Switch_6c72043a-4512-48ae-8e27-2d543505e9d9.pdf?v=1667189986',
    travel: {
        pre: Travel.Millimeter(1.1, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.5, Tolerance.Minus(0.4)),
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(64),
    },
} satisfies Switch;
