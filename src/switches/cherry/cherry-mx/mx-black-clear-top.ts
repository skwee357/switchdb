import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

const COLOR_STEM = '#2C2C2D';
const COLOR_BASE_UPPER = '#E9EADF';
const COLOR_BASE_LOWER = '#272728';

export default {
    model: 'Black Clear-Top',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'linear',
    spring: SpringStainlessSteel.Regular('gold'),
    volume: 'medium',
    lifetime: 50,
    mount: '3pin',
    datasheet:
        'https://www.cherrymx.de/_Resources/Persistent/b/3/e/c/b3ecb83ea7c008053a2e893f0ffb651a74aaf505/EN_MX_Black_Clear-Top_Data_Sheet.pdf',
    lighting: 'in_switch',
    lubrication: 'none',
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE_UPPER)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE_LOWER)),
    },
    force: {
        actuation: Force.Centinewton(63.5),
        bottom: Force.EstimatedCentinewton(84),
    },
    travel: {
        pre: Travel.Millimeter(2),
        total: Travel.Millimeter(4),
    },
} satisfies Switch;
