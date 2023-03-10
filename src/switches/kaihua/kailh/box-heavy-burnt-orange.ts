import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'BOX Heavy',
    variation: 'Burnt Orange',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#FA683E'))),
    type: 'tactile',
    volume: 'medium',
    spring: SpringStainlessSteel.Thick(),
    mount: '3pin',
    lighting: 'smd',
    lifetime: 80,
    lubrication: 'none',
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.NylonPA66(Color.Opaque('#D9D4CA')),
    },
    datasheet:
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S07_Kailh_BOX_Heavy_Burnt_Orange_Switch_3fafab58-53a1-4b1c-a342-83718d989287.pdf?v=1667189729',
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.3)),
        pressure: undefined,
    },
    force: {
        actuation: Force.GramForce(60, Tolerance.PlusMinus(15)),
        bottom: Force.EstimatedGramForce(80),
        tactile: Force.GramForce(70, Tolerance.PlusMinus(10)),
    },
} satisfies Switch;
