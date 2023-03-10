import type { CollectionInterface } from '../../collection';
import candy from './candy';

export default (collection: CollectionInterface): void => {
    collection.add({ name: 'Candy', brands: [candy] });
};
