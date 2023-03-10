import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Travel } from '../../../types';

export default {
    model: 'Halo',
    variation: 'True',
    profile: 'regular',
    type: 'tactile',
    mount: '3pin',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque('#EEC3AB'))),
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
        tactile: Force.GramForce(60),
        actuation: Force.GramForce(54),
        bottom: Force.GramForce(100),
    },
    travel: {
        pre: undefined,
        total: Travel.Millimeter(4),
        pressure: Travel.Millimeter(0.5),
    },
} satisfies Switch;
