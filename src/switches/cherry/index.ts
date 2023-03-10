import type { CollectionInterface } from '../../collection';
import cherryMx from './cherry-mx';

export default (collection: CollectionInterface): void => {
    collection.add({ name: 'Cherry', brands: [cherryMx] });
};
