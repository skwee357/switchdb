import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box',
    variation: 'Red',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#F1261B'))),
    type: 'linear',
    volume: 'low',
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
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.3)),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(58),
    },
} satisfies Switch;
