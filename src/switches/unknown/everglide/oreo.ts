import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance } from '../../../types';

export default {
    model: 'Oreo',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#FFFFFF'))),
    volume: undefined,
    datasheet: undefined,
    lighting: undefined,
    mount: '5pin',
    lubrication: 'none',
    spring: SpringStainlessSteel.Regular('gold'),
    lifetime: undefined,
    housing: {
        upper: Material.Unspecified(Color.Transparent('#CAC9C0')),
        lower: Material.Unspecified(Color.Transparent('#CAC9C0')),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        tactile: undefined,
        bottom: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
        pressure: undefined,
    },
} satisfies Switch;
