import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

const COLOR = '#FFFFFF';

export default {
    model: 'U4T',
    variation: '65g',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#D5992D'))),
    mount: '5pin',
    lubrication: 'none',
    volume: 'loud',
    lifetime: undefined,
    lighting: 'both',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR)),
        lower: Material.Unspecified(Color.Opaque(COLOR)),
    },
    force: {
        bottom: Force.GramForce(65),
        actuation: undefined,
        tactile: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
        pressure: undefined,
    },
} satisfies Switch;
