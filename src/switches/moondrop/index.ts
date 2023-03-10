import type { CollectionInterface } from '../../collection';
import gSquare from './g-square';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'Moondrop',
        brands: [gSquare],
    });
};
