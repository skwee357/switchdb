import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'Boba Black U4T',
    variation: '68g',
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
        upper: Material.Unspecified(Color.Opaque('#000000')),
        lower: Material.Unspecified(Color.Opaque('#000000')),
    },
    force: {
        bottom: Force.GramForce(68),
        actuation: undefined,
        tactile: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
        pressure: undefined,
    },
} satisfies Switch;
