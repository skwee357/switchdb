import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box Ink V2',
    variation: 'Pink',
    profile: 'regular',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque('#E0C6C7'))),
    type: 'linear',
    lifetime: 60,
    mount: '5pin',
    lighting: 'smd',
    lubrication: 'slight',
    spring: SpringStainlessSteel.Regular(),
    volume: 'low',
    housing: {
        upper: Material.ProprietaryInk(Color.Transparent('#D2BBB8')),
        lower: Material.ProprietaryInk(Color.Transparent('#D2BBB8')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/files/SPEC-KS-8FHW10B050NW-D33-Box_Ink_Pink_Switch.pdf?v=1667275121',
    travel: {
        pre: Travel.Millimeter(1.2, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.4, Tolerance.Minus(0.4)),
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(60),
    },
} satisfies Switch;
