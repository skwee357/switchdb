import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Deep Sea Silent Pro Box Brown',
    variation: 'Whale',
    profile: 'regular',
    stem: StemMX.Circular(Material.ClearPlastic(Color.Transparent('#A47B71'))),
    type: 'tactile',
    volume: 'silent',
    spring: SpringStainlessSteel.Long(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 100,
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.Nylon(Color.Opaque('#2F65B9')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG1511F01S129_Kailh_Deep_Sea_Silent_Pro_Box_Brown_Switch_990f090c-af11-493f-aa8f-db466b8ea21a.pdf?v=1672211470',
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(54),
        tactile: Force.EstimatedGramForce(60),
    },
} satisfies Switch;
