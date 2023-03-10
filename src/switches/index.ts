import { CollectionInterface } from '../collection';
import candy from './candy';
import cherry from './cherry';
import everglide from './everglide';
import gSquare from './g-square';
import gateron from './gateron';
import invyr from './invyr';
import kaihua from './kaihua';
import moondrop from './moondrop';
import outemu from './outemu';
import unknown from './unknown';

export default (collection: CollectionInterface): void => {
    candy(collection);
    cherry(collection);
    everglide(collection);
    gSquare(collection);
    gateron(collection);
    invyr(collection);
    kaihua(collection);
    moondrop(collection);
    outemu(collection);
    unknown(collection);
};
