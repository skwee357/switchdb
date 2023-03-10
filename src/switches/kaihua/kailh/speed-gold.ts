import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed',
    variation: 'Gold',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#F9AA01'))),
    type: 'clicky',
    volume: 'loud',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D211_Kailh_Speed_Gold_Switch_fb0528e2-ed2c-498a-82b0-7be83ee3f764.pdf?v=1667189931',
    travel: {
        pre: Travel.Millimeter(1.4, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.5, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(60),
        tactile: Force.EstimatedGramForce(60),
    },
} satisfies Switch;
