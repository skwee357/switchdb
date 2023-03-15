import { CollectionInterface } from './collection';
import { Brand, Manufacturer, Switch } from './switch';
import collection from './switches';
import { MechanicalKeySwitch } from './collection';
import pkg from '../package.json';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const VERSION = pkg.version;

export {
    collection,
    CollectionInterface,
    Switch,
    Brand,
    Manufacturer,
    MechanicalKeySwitch,
    VERSION,
};
