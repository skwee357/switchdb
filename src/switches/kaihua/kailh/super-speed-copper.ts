import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Super Speed',
    variation: 'Copper',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#72262B'))),
    type: 'tactile',
    volume: 'medium',
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
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(38, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(60),
        tactile: Force.GramForce(50, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
