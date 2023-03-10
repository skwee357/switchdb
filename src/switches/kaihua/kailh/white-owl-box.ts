import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'White Owl Box',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#FFFFFF'))),
    type: 'clicky',
    spring: SpringStainlessSteel.Short(),
    volume: 'loud',
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent('#B9B9B9')),
        lower: Material.POM(Color.Opaque('#AFAEAB')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/CPG1511F01S68_Kailh_White_Owl_Switch_8cd51931-aeb1-4c96-97d7-9efa4f255340.pdf?v=1667189471',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(46, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedGramForce(68),
        tactile: Force.GramForce(70, Tolerance.PlusMinus(15)),
    },
} satisfies Switch;
