import type { CollectionInterface } from '../../collection';
import alps from './alps';

export default (collection: CollectionInterface): void => {
    collection.add({ name: 'Alps', brands: [alps] });
};
