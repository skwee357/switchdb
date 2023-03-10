import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Midnight Pro Silent',
    variation: 'Tactile',
    profile: 'regular',
    stem: StemMX.PartialBox(Material.POM(Color.Opaque('#716D6A'))),
    type: 'tactile',
    volume: 'silent',
    spring: SpringStainlessSteel.Long(),
    datasheet: undefined,
    mount: '5pin',
    lighting: 'smd',
    lifetime: 70,
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent('#D0D0D0')),
        lower: Material.NylonPA66(Color.Opaque('#716D6A')),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.7, Tolerance.PlusMinus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(45, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(60),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
