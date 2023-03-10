import type { CollectionInterface } from '../../collection';
import drop from './drop';
import gateron from './gateron';
import keyfirst from './keyfirst';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'Gateron',
        brands: [drop, gateron, keyfirst],
    });
};
