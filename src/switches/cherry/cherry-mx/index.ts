import { Brand } from '../../../switch';
import mxBlack from './mx-black';
import mxBlackClearTop from './mx-black-clear-top';
import mxBlackClearTopFactoryLube from './mx-black-clear-top-factory-lube';
import mxBlackRgb from './mx-black-rgb';
import mxBlue from './mx-blue';
import mxBlueRgb from './mx-blue-rgb';
import mxBrown from './mx-brown';
import mxBrownRgb from './mx-brown-rgb';
import mxClear from './mx-clear';
import mxClearRgb from './mx-clear-rgb';
import mxErgoClear from './mx-ergo-clear';
import mxErgoClearFactoryLube from './mx-ergo-clear-factory-lube';
import mxErgoClearFactoryLubeRgb from './mx-ergo-clear-factory-lube-rgb';
import mxErgoClearRgb from './mx-ergo-clear-rgb';
import mxGreen from './mx-green';
import mxGrey from './mx-grey';
import mxRed from './mx-red';
import mxRedLowProfile from './mx-red-low-profile';
import mxRedRgb from './mx-red-rgb';
import mxSilentBlack from './mx-silent-black';
import mxSilentBlackRgb from './mx-silent-black-rgb';
import mxSilentRed from './mx-silent-red';
import mxSilentRedRgb from './mx-silent-red-rgb';
import mxSpeedLowProfile from './mx-speed-low-profile';
import mxSpeedSilver from './mx-speed-silver';
import mxSpeedSilverRgb from './mx-speed-silver-rgb';

export default {
    name: 'Cherry MX',
    switches: [
        // full size
        mxBlack,
        mxBlackRgb,
        mxBlue,
        mxBlueRgb,
        mxBrown,
        mxBrownRgb,
        mxRed,
        mxRedRgb,
        mxSilentBlack,
        mxSilentBlackRgb,
        mxSilentRed,
        mxSilentRedRgb,
        mxSpeedSilver,
        mxSpeedSilverRgb,

        // special
        mxBlackClearTop,
        mxBlackClearTopFactoryLube,
        mxClear,
        mxClearRgb,
        mxErgoClear,
        mxErgoClearRgb,
        mxErgoClearFactoryLube,
        mxErgoClearFactoryLubeRgb,
        mxGreen,
        mxGrey,

        // low profile
        mxRedLowProfile,
        mxSpeedLowProfile,
    ],
} satisfies Brand;
