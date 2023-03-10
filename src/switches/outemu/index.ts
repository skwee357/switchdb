import type { CollectionInterface } from '../../collection';
import gazzew from './gazzew';

export default (collection: CollectionInterface): void => {
    collection.add({
        name: 'Outemu',
        brands: [gazzew],
    });
};
