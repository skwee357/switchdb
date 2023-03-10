import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'Boba LT',
    variation: '55g',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#BC87D2'))),
    mount: '5pin',
    lubrication: 'slight',
    volume: 'loud',
    lifetime: undefined,
    lighting: 'both',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Opaque('#D8BDE4')),
        lower: Material.Unspecified(Color.Opaque('#D8BDE4')),
    },
    force: {
        bottom: Force.GramForce(55),
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
    },
} satisfies Switch;
