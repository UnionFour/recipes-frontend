import { ISortMethod } from './sortMethod.model';
import { Order } from './order.model';

export interface ISelectedSortMethod {
    sortMethod: ISortMethod;
    order: Order;
}
