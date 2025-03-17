import { Observable } from './observable.js';
/**
 * Observer interface that defines the method to update the observer.
 */
export interface Observer {
  update(observable: Observable): void;
};