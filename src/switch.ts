import type { Color, Force, Travel } from './types';

interface ForceSpec {
    readonly actuation: Force | undefined;
    readonly bottom: Force | undefined;
}

interface TactileForceSpec extends ForceSpec {
    readonly tactile: Force | undefined;
}

interface TravelSpec {
    readonly pre: Travel | undefined;
    readonly total: Travel | undefined;
}

interface TactileTravelSpec extends TravelSpec {
    readonly pressure: Travel | undefined;
}

export type MaterialType =
    | 'pom'
    | 'pc'
    | 'nylon'
    | 'nylon_pa66'
    | 'reinforced_nylon'
    | 'clear_plastic'
    | 'pa12'
    | 'proprietary_ink';

export class Material {
    private constructor(
        public readonly type?: MaterialType,
        public readonly color?: Color
    ) {}

    public static Unspecified(color?: Color): Material {
        return new Material(undefined, color);
    }

    public static POM(color?: Color): Material {
        return new Material('pom', color);
    }

    public static PC(color?: Color): Material {
        return new Material('pc', color);
    }

    public static Nylon(color?: Color): Material {
        return new Material('nylon', color);
    }

    public static ReinforcedNylon(color?: Color): Material {
        return new Material('reinforced_nylon', color);
    }

    public static NylonPA66(color?: Color): Material {
        return new Material('nylon_pa66', color);
    }

    public static ClearPlastic(color?: Color): Material {
        return new Material('clear_plastic', color);
    }

    public static PA12(color?: Color): Material {
        return new Material('pa12', color);
    }

    public static ProprietaryInk(color?: Color): Material {
        return new Material('proprietary_ink', color);
    }
}

interface StemBase {
    readonly type: string;
}

export class StemMX implements StemBase {
    public readonly type = 'mx';

    private constructor(
        public readonly design: 'regular' | 'box' | 'partial_box' | 'circular',
        public readonly material: Material
    ) {}

    public static Regular(material: Material): StemMX {
        return new StemMX('regular', material);
    }

    public static Box(material: Material): StemMX {
        return new StemMX('box', material);
    }

    public static PartialBox(material: Material): StemMX {
        return new StemMX('partial_box', material);
    }

    public static Circular(material: Material): StemMX {
        return new StemMX('circular', material);
    }
}

interface SpringBase {
    readonly material: string;
}

type StainlessSteelSpringForm =
    | 'regular'
    | 'short'
    | 'long'
    | 'thick'
    | 'double_stage';
type StainlessSteelSpringCoating = 'gold' | 'black';

export class SpringStainlessSteel implements SpringBase {
    public readonly material = 'stainless_steel';

    private constructor(
        public readonly form: StainlessSteelSpringForm,
        public readonly coating?: StainlessSteelSpringCoating
    ) {}

    public static Regular(
        coating?: StainlessSteelSpringCoating
    ): SpringStainlessSteel {
        return new SpringStainlessSteel('regular', coating);
    }

    public static Short(
        coating?: StainlessSteelSpringCoating
    ): SpringStainlessSteel {
        return new SpringStainlessSteel('short', coating);
    }

    public static Long(
        coating?: StainlessSteelSpringCoating
    ): SpringStainlessSteel {
        return new SpringStainlessSteel('long', coating);
    }

    public static Thick(
        coating?: StainlessSteelSpringCoating
    ): SpringStainlessSteel {
        return new SpringStainlessSteel('thick', coating);
    }

    public static DoubleStage(
        coating?: StainlessSteelSpringCoating
    ): SpringStainlessSteel {
        return new SpringStainlessSteel('double_stage', coating);
    }
}

export type Stem = StemMX;
export type Profile = 'regular' | 'low';
export type SwitchType = 'linear' | 'tactile' | 'clicky';
export type Spring = SpringStainlessSteel;
export type VolumeLevel = 'silent' | 'low' | 'medium' | 'loud' | undefined;
export type Mount = '3pin' | '5pin' | 'both' | undefined;
export type Lubrication = 'factory' | 'self' | 'slight' | 'none';
export type Lighting = 'in_switch' | 'smd' | 'both' | 'none' | undefined;
export type ForceProperty = ForceSpec | TactileForceSpec;
export type TravelProperty = TravelSpec | TactileTravelSpec;

interface BaseSwitch<F extends ForceProperty, T extends TravelProperty> {
    readonly type: SwitchType;
    readonly model: string;
    readonly variation?: string;
    readonly stem: Stem;
    readonly profile: Profile;
    readonly spring: Spring | undefined;
    readonly volume: VolumeLevel;
    readonly mount: Mount;
    readonly lubrication: Lubrication;
    readonly lifetime: number | undefined;
    readonly datasheet: string | undefined;
    readonly lighting: Lighting;
    readonly housing: {
        readonly upper: Material;
        readonly lower: Material;
    };
    readonly force: F;
    readonly travel: T;
}

export interface LinearSwitch extends BaseSwitch<ForceSpec, TravelSpec> {
    readonly type: 'linear';
}

export interface TactileSwitch
    extends BaseSwitch<TactileForceSpec, TactileTravelSpec> {
    readonly type: 'tactile' | 'clicky';
}

export type Switch = LinearSwitch | TactileSwitch;

export interface Brand {
    readonly name: string;
    readonly switches: Array<Switch>;
}

export interface Manufacturer {
    readonly name: string;
    readonly brands: Array<Brand>;
}
