import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box V2',
    variation: 'Brown',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#7E554A'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Long('gold'),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent('#B6B4B9')),
        lower: Material.Nylon(Color.Opaque('#363436')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(70),
        tactile: Force.GramForce(75, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
