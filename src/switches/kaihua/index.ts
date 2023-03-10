import type { CollectionInterface } from '../../collection';
import drop from './drop';
import kailh from './kailh';
import novelkeys from './novelkeys';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'Kaihua',
        brands: [drop, kailh, novelkeys],
    });
};
