import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Clione Limacina',
    variation: 'Tactile',
    profile: 'regular',
    stem: StemMX.Regular(Material.PA12(Color.Transparent())),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Long('gold'),
    mount: '5pin',
    lighting: 'smd',
    lifetime: 50,
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent()),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.4)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(58, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(68),
        tactile: Force.GramForce(70, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
