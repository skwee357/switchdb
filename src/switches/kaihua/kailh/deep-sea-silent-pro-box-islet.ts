import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Deep Sea Silent Pro Box Red',
    variation: 'Islet',
    profile: 'regular',
    stem: StemMX.Circular(Material.ClearPlastic(Color.Transparent('#F9F9F9'))),
    type: 'linear',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG1511F01S130_Kailh_Deep_Sea_Silent_Pro_Box_Red_Switch_3dcdd04b-5525-48b3-9c50-3f319529323c.pdf?v=1672211497',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.4)),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(52),
    },
} satisfies Switch;
