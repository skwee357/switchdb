import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Clione Limacina',
    variation: 'Linear',
    profile: 'regular',
    stem: StemMX.Regular(Material.PA12(Color.Transparent())),
    type: 'linear',
    volume: 'low',
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
    },
    force: {
        actuation: Force.GramForce(58, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(68),
    },
} satisfies Switch;
