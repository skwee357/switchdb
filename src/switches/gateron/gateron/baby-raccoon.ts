import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Baby Raccoon',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#847463'))),
    type: 'linear',
    lifetime: 80,
    mount: '5pin',
    lighting: 'smd',
    volume: 'low',
    lubrication: 'factory',
    spring: SpringStainlessSteel.Long('gold'),
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Milky),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/files/SPEC-KS-9BBR10B055NW-D85-Baby_Raccoon_Linear_Switch.pdf?v=1670916314',
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.2)),
    },
    force: {
        actuation: Force.GramForce(55, Tolerance.PlusMinus(8)),
        bottom: Force.EstimatedGramForce(61),
    },
} satisfies Switch;
