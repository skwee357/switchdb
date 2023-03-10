import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Travel } from '../../../types';

export default {
    model: 'Halo',
    variation: 'Clear',
    profile: 'regular',
    type: 'tactile',
    mount: '3pin',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#E9E9E7'))),
    lifetime: undefined,
    lighting: 'smd',
    datasheet: undefined,
    spring: undefined,
    volume: undefined,
    lubrication: 'none',
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Milky),
    },
    force: {
        tactile: Force.GramForce(65),
        actuation: Force.GramForce(52),
        bottom: Force.GramForce(78),
    },
    travel: {
        pre: undefined,
        total: Travel.Millimeter(4),
        pressure: Travel.Millimeter(0.5),
    },
} satisfies Switch;
