import {
    Material,
    Switch,
    StemMX,
    SpringStainlessSteel,
} from '../../../switch';
import { Color, Force, Travel } from '../../../types';

const COLOR_STEM = '#424243';
const COLOR_BASE = '#272728';

export default {
    model: 'Grey',
    stem: StemMX.Regular(Material.Unspecified(Color.Opaque(COLOR_STEM))),
    profile: 'regular',
    type: 'tactile',
    spring: SpringStainlessSteel.Regular(),
    volume: 'medium',
    lifetime: 50,
    lighting: 'none',
    mount: undefined,
    lubrication: 'none',
    datasheet: undefined,
    housing: {
        upper: Material.Unspecified(Color.Opaque(COLOR_BASE)),
        lower: Material.Unspecified(Color.Opaque(COLOR_BASE)),
    },
    force: {
        actuation: Force.EstimatedCentinewton(70),
        bottom: Force.EstimatedCentinewton(110),
        tactile: Force.EstimatedCentinewton(80),
    },
    travel: {
        pre: Travel.Millimeter(2),
        total: Travel.Millimeter(4),
        pressure: undefined,
    },
} satisfies Switch;
