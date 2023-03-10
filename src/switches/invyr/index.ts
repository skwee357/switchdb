import type { CollectionInterface } from '../../collection';
import drop from './drop';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'Invyr',
        brands: [drop],
    });
};
