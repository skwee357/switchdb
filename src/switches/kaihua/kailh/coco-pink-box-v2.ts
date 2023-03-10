import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'COCO PINK Box V2',
    stem: StemMX.Box(Material.POM(Color.Opaque('#D2B9BA'))),
    type: 'linear',
    profile: 'regular',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    lighting: 'smd',
    lifetime: 80,
    mount: '3pin',
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent('#97380C')),
        lower: Material.PC(Color.Transparent('#97380C')),
    },
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(50),
    },
} satisfies Switch;
