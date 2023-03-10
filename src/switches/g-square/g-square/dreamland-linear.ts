import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

export default {
    model: 'Dreamland',
    variation: 'Linear',
    profile: 'regular',
    type: 'linear',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#E0A4F3'))),
    lighting: undefined,
    spring: SpringStainlessSteel.Regular(),
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    lifetime: undefined,
    mount: '5pin',
    housing: {
        upper: Material.PC(Color.Opaque('#C6DEFF')),
        lower: Material.ReinforcedNylon(Color.Opaque('#A8EEFF')),
    },
    force: {
        bottom: Force.GramForce(58),
        actuation: Force.GramForce(42),
    },
    travel: {
        pre: undefined,
        total: Travel.Millimeter(3.2),
    },
} satisfies Switch;
