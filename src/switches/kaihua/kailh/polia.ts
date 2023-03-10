import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Polia Tactile',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#C1C1E7'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 70,
    datasheet: undefined,
    lubrication: 'self',
    housing: {
        upper: Material.PC(Color.Transparent('#BFBFBF')),
        lower: Material.NylonPA66(Color.Opaque('#C1C1E7')),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.8, Tolerance.PlusMinus(0.6)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(64),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
