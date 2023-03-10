import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box V2',
    variation: 'White',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#FFFFFF'))),
    type: 'clicky',
    volume: 'loud',
    spring: SpringStainlessSteel.Long('gold'),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent('#B6B4B9')),
        lower: Material.Nylon(Color.Opaque('#363436')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(50),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(15)),
    },
} satisfies Switch;
