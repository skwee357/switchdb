export enum ToleranceSign {
    Minus = 'minus',
    PlusMinus = 'plus_minus',
}

export class Tolerance {
    static Minus(value: number): Tolerance {
        return new Tolerance(ToleranceSign.Minus, value);
    }

    static PlusMinus(value: number): Tolerance {
        return new Tolerance(ToleranceSign.PlusMinus, value);
    }

    private constructor(
        public readonly sign: ToleranceSign,
        public readonly value: number
    ) {}
}

const CENTINEWTON_IN_GRAM_FORCE = 1.019716213;

export enum ForceUnit {
    Centinewton = 'cn',
    GramForce = 'gf',
}

export class Force {
    static Centinewton(value: number, tolerance?: Tolerance): Force {
        return new Force(ForceUnit.Centinewton, value, tolerance, false);
    }

    static EstimatedCentinewton(value: number): Force {
        return new Force(ForceUnit.Centinewton, value, undefined, true);
    }

    static GramForce(value: number, tolerance?: Tolerance): Force {
        return new Force(ForceUnit.GramForce, value, tolerance, false);
    }

    static EstimatedGramForce(value: number): Force {
        return new Force(ForceUnit.Centinewton, value, undefined, true);
    }

    static Zero(unit: ForceUnit): Force {
        return new Force(unit, 0);
    }

    constructor(
        public readonly unit: ForceUnit,
        public readonly value: number,
        public readonly tolerance?: Tolerance,
        public readonly estimated: boolean = false
    ) {}

    convert(to: ForceUnit, round = false): Force {
        if (this.unit === to) {
            return this;
        }
        const multiplier =
            this.unit === ForceUnit.Centinewton
                ? CENTINEWTON_IN_GRAM_FORCE
                : 1 / CENTINEWTON_IN_GRAM_FORCE;
        let value = this.value * multiplier;
        if (round) {
            value = Math.round(value);
        }
        return new Force(to, value, this.tolerance, this.estimated);
    }

    compare(other: Force): number {
        const converted = other.convert(this.unit);
        return this.value - converted.value;
    }

    lt(other: Force): boolean {
        return this.compare(other) < 0;
    }

    gt(other: Force): boolean {
        return this.compare(other) > 0;
    }

    between(lhs: Force, rhs: Force): boolean {
        return this.compare(lhs) >= 0 && this.compare(rhs) <= 0;
    }

    floor(): Force {
        return new Force(
            this.unit,
            Math.floor(this.value),
            this.tolerance,
            this.estimated
        );
    }

    ceil(): Force {
        return new Force(
            this.unit,
            Math.ceil(this.value),
            this.tolerance,
            this.estimated
        );
    }
}

export enum TravelUnit {
    Millimeter = 'mm',
}

export class Travel {
    static Millimeter(value: number, tolerance?: Tolerance): Travel {
        return new Travel(TravelUnit.Millimeter, value, tolerance);
    }

    constructor(
        public readonly unit: TravelUnit,
        public readonly value: number,
        public readonly tolerance?: Tolerance
    ) {}

    compare(other: Travel): number {
        return this.value - other.value;
    }

    lt(other: Travel): boolean {
        return this.compare(other) < 0;
    }

    gt(other: Travel): boolean {
        return this.compare(other) > 0;
    }

    between(lhs: Travel, rhs: Travel): boolean {
        return this.compare(lhs) >= 0 && this.compare(rhs) <= 0;
    }
}

export class Color {
    public static Milky = new Color('#DCD9C8', false);

    private constructor(
        public readonly color: string | null,
        public readonly transparent: boolean
    ) {}

    public static Opaque(color: string): Color {
        return new Color(color, false);
    }

    public static Transparent(color: string | null = null): Color {
        return new Color(color, true);
    }
}
