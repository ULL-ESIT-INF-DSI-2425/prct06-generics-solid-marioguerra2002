import { Observer } from './observer.js';
/**
 * Observable interface that defines the methods to subscribe, unsubscribe and notify observers.
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}