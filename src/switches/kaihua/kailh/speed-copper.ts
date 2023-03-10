import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Speed',
    variation: 'Copper',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#4C0203'))),
    type: 'tactile',
    volume: 'medium',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG151101D213_Kailh_Speed_Copper_Switch_34b709a7-6dfb-4bad-addf-069d56b2892f.pdf?v=1667190008',
    travel: {
        pre: Travel.Millimeter(1.1, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.5, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(60),
        tactile: Force.EstimatedGramForce(50),
    },
} satisfies Switch;
