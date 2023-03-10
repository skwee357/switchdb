import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed Pro Heavy',
    variation: 'Plum',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#421B2F'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#E2DDD1')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D232_Kailh_Speed_Pro_Heavy_Plum_Switch_2632a33b-4c68-4b8f-9b6c-727153afd915.pdf?v=1667190426',
    travel: {
        pre: Travel.Millimeter(1.7, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.6)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(70, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(100),
        tactile: Force.GramForce(70, Tolerance.PlusMinus(15)),
    },
} satisfies Switch;
