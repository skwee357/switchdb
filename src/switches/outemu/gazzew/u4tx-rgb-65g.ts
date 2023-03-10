import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'U4Tx RGB',
    variation: '65g',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.PartialBox(Material.Unspecified(Color.Opaque('#D5992D'))),
    mount: '5pin',
    lubrication: 'none',
    volume: 'loud',
    lifetime: undefined,
    lighting: 'smd',
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Opaque('#FFFFFF')),
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
