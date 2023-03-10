import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed Pro Heavy',
    variation: 'Navy',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#3D4463'))),
    type: 'clicky',
    volume: 'loud',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 50,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#E2DDD1')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D234_Kailh_Speed_Pro_Heavy_Navy_Switch_18efa14b-e3e8-4761-a504-acbd0b56c4c8.pdf?v=1667190495',
    travel: {
        pre: Travel.Millimeter(1.2, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(3.5, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(70, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedGramForce(100),
        tactile: Force.EstimatedGramForce(100),
    },
} satisfies Switch;
