import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

const COLOR = '#E7EBEE';

export default {
    model: 'White Samurai',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Regular(Material.POM(Color.Opaque(COLOR))),
    lighting: undefined,
    spring: SpringStainlessSteel.Regular(),
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    lifetime: undefined,
    mount: '5pin',
    housing: {
        upper: Material.PC(Color.Opaque(COLOR)),
        lower: Material.ReinforcedNylon(Color.Opaque(COLOR)),
    },
    force: {
        bottom: Force.GramForce(62),
        actuation: Force.GramForce(43),
    },
    travel: {
        pre: undefined,
        total: Travel.Millimeter(3.2),
    },
} satisfies Switch;
