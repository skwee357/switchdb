import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Aqua King',
    variation: '55g',
    profile: 'regular',
    stem: StemMX.Regular(Material.PC(Color.Transparent())),
    type: 'linear',
    mount: '5pin',
    lifetime: 50,
    datasheet: undefined,
    volume: undefined,
    lubrication: 'none',
    spring: SpringStainlessSteel.Regular('gold'),
    lighting: undefined,
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent()),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(4, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(55, Tolerance.PlusMinus(10)),
        bottom: undefined,
    },
} satisfies Switch;
