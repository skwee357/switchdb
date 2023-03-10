import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR = '#EDE4D8';

export default {
    model: 'Box Cream',
    profile: 'regular',
    stem: StemMX.Circular(Material.POM(Color.Opaque(COLOR))),
    type: 'linear',
    volume: 'low',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    mount: '5pin',
    lighting: 'smd',
    lifetime: 50,
    lubrication: 'self',
    housing: {
        upper: Material.POM(Color.Opaque(COLOR)),
        lower: Material.POM(Color.Opaque(COLOR)),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(60),
    },
} satisfies Switch;
