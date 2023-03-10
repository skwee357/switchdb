import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force } from '../../../types';

const COLOR = '#FBFDFF';

export default {
    model: 'Lunalight',
    profile: 'regular',
    type: 'linear',
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
        bottom: Force.GramForce(60),
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
    },
} satisfies Switch;
