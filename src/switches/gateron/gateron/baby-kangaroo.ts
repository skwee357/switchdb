import {
    Material,
    StemMX,
    SpringStainlessSteel,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Baby Kangaroo 2.0',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#97D5A9'))),
    type: 'tactile',
    lifetime: 80,
    mount: '5pin',
    lighting: 'smd',
    volume: 'medium',
    spring: SpringStainlessSteel.DoubleStage('gold'),
    lubrication: 'factory',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Milky),
    },
    datasheet: undefined,
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(3.4),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(59, Tolerance.PlusMinus(8)),
        tactile: Force.EstimatedGramForce(60),
        bottom: Force.EstimatedGramForce(55),
    },
} satisfies Switch;
