import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

export default {
    model: 'Dreamland',
    variation: 'Tactile',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FF7AC9'))),
    lighting: undefined,
    spring: SpringStainlessSteel.Regular(),
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    lifetime: undefined,
    mount: '5pin',
    housing: {
        upper: Material.PC(Color.Opaque('#89DCFF')),
        lower: Material.ReinforcedNylon(Color.Opaque('#495678')),
    },
    force: {
        bottom: Force.GramForce(62),
        actuation: Force.GramForce(43),
        tactile: undefined,
    },
    travel: {
        pre: undefined,
        total: Travel.Millimeter(3.2),
        pressure: undefined,
    },
} satisfies Switch;
