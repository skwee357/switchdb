import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force } from '../../../types';

export default {
    model: 'Holy Panda X',
    variation: 'Clear',
    profile: 'regular',
    type: 'tactile',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#E7EBEE'))),
    mount: 'both',
    volume: undefined,
    lubrication: 'factory',
    spring: undefined,
    lighting: undefined,
    lifetime: undefined,
    datasheet: undefined,
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.Nylon(Color.Opaque('#E6EAEB')),
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
