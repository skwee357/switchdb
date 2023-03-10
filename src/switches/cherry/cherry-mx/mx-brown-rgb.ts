import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#371105';

export default {
    model: 'Brown',
    variation: 'RGB',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'tactile',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lifetime: 100,
    lighting: 'smd',
    mount: 'both',
    lubrication: 'none',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/1/3/6/1/13618248706cd28e75ab9bdf9e55e9f8794611c1/EN_CHERRY_MX_BROWN.pdf',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Transparent()),
    },
    force: {
        actuation: Force.Centinewton(45, Tolerance.PlusMinus(20)),
        bottom: Force.EstimatedCentinewton(60),
        tactile: Force.Centinewton(55, Tolerance.PlusMinus(25)),
    },
    travel: {
        pre: Travel.Millimeter(2, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.Minus(0.4)),
        pressure: undefined,
    },
} satisfies Switch;
