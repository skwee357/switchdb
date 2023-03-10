import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Crystal Robin Box',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#6FE8F8'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular('gold'),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent()),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S35-2_Kailh_Crystal_Robin_Box_Switch_0dc6c347-703a-4f40-aca2-033652d7e7ab.pdf?v=1667189816',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(68),
        tactile: Force.EstimatedGramForce(68),
    },
} satisfies Switch;
