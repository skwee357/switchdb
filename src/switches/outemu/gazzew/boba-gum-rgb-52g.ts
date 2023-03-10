import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

const COLOR = '#F1BBCB';

export default {
    model: 'Boba Gum RGB',
    variation: '52g',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#F690D2'))),
    mount: '5pin',
    lubrication: 'none',
    volume: 'silent',
    lifetime: undefined,
    lighting: 'smd',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Opaque(COLOR)),
    },
    force: {
        bottom: Force.GramForce(52),
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
    },
} satisfies Switch;
