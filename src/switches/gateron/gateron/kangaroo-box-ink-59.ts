import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Kangaroo Box Ink',
    variation: '59 gf',
    profile: 'regular',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque('#C0D7B5'))),
    type: 'tactile',
    lifetime: 50,
    mount: '5pin',
    lighting: 'none',
    lubrication: 'none',
    volume: 'medium',
    spring: SpringStainlessSteel.Regular('gold'),
    housing: {
        upper: Material.ProprietaryInk(Color.Transparent('#DDC19A')),
        lower: Material.ProprietaryInk(Color.Transparent('#DDC19A')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/files/SPEC-KS-8KA10B059NW-X89-Kangaroo_Box_Ink_Switch-59_gf.pdf?v=1667275922',
    travel: {
        pre: Travel.Millimeter(1.5, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(3.5),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(59, Tolerance.PlusMinus(15)),
        tactile: Force.EstimatedGramForce(60),
        bottom: Force.EstimatedGramForce(66),
    },
} satisfies Switch;
