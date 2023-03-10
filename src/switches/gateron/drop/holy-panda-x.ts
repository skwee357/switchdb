import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'Holy Panda X',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#E9CE85'))),
    mount: 'both',
    volume: undefined,
    lubrication: 'factory',
    spring: undefined,
    lighting: undefined,
    lifetime: undefined,
    datasheet: undefined,
    housing: {
        upper: Material.PC(Color.Opaque('#000000')),
        lower: Material.Nylon(Color.Opaque('#000000')),
    },
    force: {
        bottom: Force.GramForce(60),
        tactile: undefined,
        actuation: undefined,
    },
    travel: {
        pre: undefined,
        total: undefined,
        pressure: undefined,
    },
} satisfies Switch;
