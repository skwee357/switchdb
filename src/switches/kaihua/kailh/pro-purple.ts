import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Pro',
    variation: 'Purple',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#602A71'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#E7E1D7')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D222_Kailh_Pro_Purple_Switch_4e138a38-49b6-4736-a72d-30dc9569ca0a.pdf?v=1667190722',
    travel: {
        pre: Travel.Millimeter(1.7, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.6)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
