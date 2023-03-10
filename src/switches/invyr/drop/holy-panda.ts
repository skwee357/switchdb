import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'Holy Panda',
    profile: 'regular',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#E9A583'))),
    mount: '3pin',
    type: 'tactile',
    lifetime: undefined,
    lighting: 'smd',
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    spring: undefined,
    housing: {
        upper: Material.PC(Color.Milky),
        lower: Material.Nylon(Color.Milky),
    },
    force: {
        bottom: Force.GramForce(67),
        tactile: undefined,
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
        pressure: undefined,
    },
} satisfies Switch;
