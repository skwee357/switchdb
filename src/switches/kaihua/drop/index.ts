import { Brand } from '../../../switch';
import haloClear from './halo-clear';
import haloTrue from './halo-true';

export default {
    name: 'Drop',
    switches: [haloTrue, haloClear],
} satisfies Brand;
