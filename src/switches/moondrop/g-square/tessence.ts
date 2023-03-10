import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

const COLOR = '#8DA8B6';

export default {
    model: 'Tessence',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque(COLOR))),
    mount: '5pin',
    lubrication: 'none',
    volume: undefined,
    lifetime: 80,
    lighting: undefined,
    spring: SpringStainlessSteel.Regular(),
    datasheet: undefined,
    housing: {
        upper: Material.Nylon(Color.Opaque(COLOR)),
        lower: Material.Nylon(Color.Opaque(COLOR)),
    },
    force: {
        bottom: Force.GramForce(62),
        tactile: undefined,
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
        pressure: undefined,
    },
} satisfies Switch;
