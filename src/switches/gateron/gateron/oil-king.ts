import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Oil King',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#000000'))),
    type: 'linear',
    lifetime: 60,
    mount: '5pin',
    lighting: 'smd',
    volume: 'low',
    lubrication: 'factory',
    spring: SpringStainlessSteel.Regular('black'),
    housing: {
        upper: Material.NylonPA66(Color.Opaque('#000000')),
        lower: Material.ProprietaryInk(Color.Opaque('#000000')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/files/SPEC-KS-8A10B055NW-D53-Oil_King_Switch.pdf?v=1667275489',
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4.0),
    },
    force: {
        actuation: Force.GramForce(55, Tolerance.PlusMinus(5)),
        bottom: Force.EstimatedGramForce(70),
    },
} satisfies Switch;
