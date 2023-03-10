import type { CollectionInterface } from '../../collection';
import everglide from './everglide';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'Everglide',
        brands: [everglide],
    });
};
