import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

const COLOR = '#F1BBCB';

export default {
    model: 'Boba Gum',
    variation: '62g',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#F690D2'))),
    mount: '5pin',
    lubrication: 'none',
    volume: 'silent',
    lifetime: undefined,
    lighting: 'both',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR)),
        lower: Material.Unspecified(Color.Opaque(COLOR)),
    },
    force: {
        bottom: Force.GramForce(62),
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
    },
} satisfies Switch;
