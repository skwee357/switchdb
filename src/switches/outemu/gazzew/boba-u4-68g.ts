import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'Boba U4',
    variation: '68g',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#FFFFFF'))),
    mount: '5pin',
    lubrication: 'none',
    volume: 'silent',
    lifetime: undefined,
    lighting: 'both',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Opaque('#FFFFFF')),
        lower: Material.Unspecified(Color.Opaque('#FFFFFF')),
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
