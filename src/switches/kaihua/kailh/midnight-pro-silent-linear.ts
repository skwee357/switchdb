import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Midnight Pro Silent',
    variation: 'Linear',
    profile: 'regular',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque('#ECDFBF'))),
    type: 'linear',
    volume: 'silent',
    spring: SpringStainlessSteel.Long(),
    datasheet: undefined,
    mount: '5pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent('#D0D0D0')),
        lower: Material.NylonPA66(Color.Opaque('#ECDFBF')),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.4)),
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(52),
    },
} satisfies Switch;
