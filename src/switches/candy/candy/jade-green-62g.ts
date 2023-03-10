import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Jade Green',
    variation: '62g',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#95E790'))),
    mount: '5pin',
    type: 'linear',
    lifetime: 50,
    lighting: 'both',
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    spring: SpringStainlessSteel.Regular('gold'),
    housing: {
        upper: Material.PC(Color.Transparent('#5C8683')),
        lower: Material.PC(Color.Transparent('#5C8683')),
    },
    force: {
        bottom: undefined,
        actuation: Force.GramForce(62),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.2)),
        total: undefined,
    },
} satisfies Switch;
