import { Observable } from './observable.js';
import { Observer } from './observer.js';
import { EventoMetereologico } from './events_enum.js';
/**
  * Class Station that its the observable 
 */
export class Station implements Observable {
  private observers: Observer[] = [];
  private eventType: EventoMetereologico;
  constructor(eventType: EventoMetereologico, observers: Observer[]) {
    this.eventType = eventType;
    this.observers = observers;
  }
  /**
   * Function to subscribe an observer
   * @param observer - The observer to subscribe
   */
  subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error('Observer already subscribed');
    } else {
      this.observers.push(observer);
    }
  }
  /**
   * Function to unsubscribe an observer
   * @param observer - The observer to unsubscribe
   */
  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('Observer not subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }
  /**
   * Function to notify all the observers. It calls the update method of each observer.
   */
  notify(): void {
    this.observers.forEach(observer => observer.update(this));
  }
  /**
   * Function to change the event type to Rain and notify the observers
   */
  onRain(): void {
    this.eventType = EventoMetereologico.Lluvia;
    this.notify();
  }
  /**
   * Function to change the event type to Temperature Increase and notify the observers
   */
  onTemperatureIncrease(): void {
    this.eventType = EventoMetereologico.Aumento_Temperatura;
    this.notify();
  }
  /**
   * Function to change the event type to Temperature Decrease and notify the observers
   */
  onTemperatureDecrease(): void {
    this.eventType = EventoMetereologico.Disminucion_Temperatura;
    this.notify();
  }
  /**
   * Function to change the event type to Storm and notify the observers
   */
  onStorm(): void {
    this.eventType = EventoMetereologico.Tormenta;
    this.notify();
  }
  /**
   * Function to get the event type
   */
  getEventType(): EventoMetereologico {
    return this.eventType;
  }
  /**
   * Function to get the observers
   */
  getObservers(): Observer[] {
    return this.observers;
  }
  
}