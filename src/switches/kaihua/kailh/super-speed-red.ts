import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Super Speed',
    variation: 'Red',
    profile: 'regular',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque('#F03625'))),
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
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(4.0, Tolerance.Minus(0.4)),
    },
    force: {
        actuation: Force.GramForce(37, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(40),
    },
} satisfies Switch;
