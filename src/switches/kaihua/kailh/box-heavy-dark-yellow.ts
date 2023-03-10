import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'BOX Heavy',
    variation: 'Dark Yellow',
    profile: 'regular',
    stem: StemMX.Box(Material.POM(Color.Opaque('#FCC803'))),
    type: 'linear',
    volume: 'low',
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
        'https://cdn.shopify.com/s/files/1/0657/6075/5954/files/SPEC-CPG1511F01S08_Kailh_BOX_Heavy_Dark_Yellow_Switch_daf23bdd-cef8-4a87-ba08-697a8c6f95d3.pdf?v=1667189759',
    travel: {
        pre: Travel.Millimeter(1.8, Tolerance.PlusMinus(0.4)),
        total: Travel.Millimeter(3.6, Tolerance.Minus(0.3)),
    },
    force: {
        actuation: Force.GramForce(70, Tolerance.PlusMinus(10)),
        bottom: Force.EstimatedGramForce(84),
    },
} satisfies Switch;
