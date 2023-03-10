import type { CollectionInterface } from '../../collection';
import gSquare from './g-square';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'G-Square',
        brands: [gSquare],
    });
};
