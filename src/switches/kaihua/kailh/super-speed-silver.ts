import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Super Speed',
    variation: 'Silver',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#B1B2B1'))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Long(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent('#B7BEBF')),
        lower: Material.NylonPA66(Color.Opaque('#000000')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(1.1, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.5, Tolerance.Minus(0.4)),
    },
    force: {
        actuation: Force.GramForce(38, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(52),
    },
} satisfies Switch;
