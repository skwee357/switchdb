import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box Ink V2',
    variation: 'Black',
    profile: 'regular',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque('#010004'))),
    type: 'linear',
    lifetime: 60,
    mount: '5pin',
    lighting: 'smd',
    lubrication: 'slight',
    spring: SpringStainlessSteel.Regular(),
    volume: 'low',
    housing: {
        upper: Material.ProprietaryInk(Color.Transparent('#644A3E')),
        lower: Material.ProprietaryInk(Color.Transparent('#644A3E')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/files/SPEC-KS-8AW10B060NW-D32-Box_Ink_Black_Switch.pdf?v=1667275093',
    travel: {
        pre: Travel.Millimeter(1.2, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.4, Tolerance.Minus(0.4)),
    },
    force: {
        actuation: Force.GramForce(60, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(70),
    },
} satisfies Switch;
