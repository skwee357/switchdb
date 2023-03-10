import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Box',
    variation: 'Navy',
    profile: 'regular',
    stem: StemMX.Box(Material.Unspecified(Color.Opaque('#495682'))),
    type: 'clicky',
    lifetime: 70,
    mount: '3pin',
    spring: undefined,
    lubrication: 'none',
    lighting: undefined,
    datasheet: undefined,
    volume: undefined,
    housing: {
        upper: Material.Unspecified(Color.Transparent()),
        lower: Material.Unspecified(Color.Opaque('#FFFFFF')),
    },
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
        pressure: Travel.Millimeter(1.7),
    },
    force: {
        actuation: Force.GramForce(60, Tolerance.PlusMinus(10)),
        tactile: Force.GramForce(65, Tolerance.PlusMinus(10)),
        bottom: Force.GramForce(90),
    },
} satisfies Switch;
