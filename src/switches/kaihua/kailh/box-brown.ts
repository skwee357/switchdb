import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box',
    variation: 'Brown',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#764232'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#F6F4F0')),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(58),
        tactile: Force.GramForce(50, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
