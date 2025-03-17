import { Observer } from "./observer.js";
import { EventoMetereologico } from "./events_enum.js";
import { Observable } from "./observable.js";
import { Station } from "./event_observable.js";
/**
* Class Mobile that its the observer
*/
export class Mobile implements Observer {
  constructor( private name: string, private model: string, private id: string ) {}
  getName(): string {
    return this.name;
  }
  getModel(): string {
    return this.model;
  }
  getId(): string {
    return this.id;
  }


  /**
   * Update method that is called when the observable changes
   * @param observable - The observable that changed its state 
   */
  update(observable: Observable): void {
    if (observable instanceof Station) {
      switch(observable.getEventType()) {
        case EventoMetereologico.Lluvia:
          console.log(`${this.name} says: It's raining`);
          break;
        case EventoMetereologico.Aumento_Temperatura:
          console.log(`${this.name} says: Temperature is increasing`);
          break;
        case EventoMetereologico.Disminucion_Temperatura:
          console.log(`${this.name} says: Temperature is decreasing`);
          break;
        case EventoMetereologico.Tormenta:
          console.log(`${this.name} says: It's storming`);
          break;
        default:
          console.log(`${this.name} says: No event`);
          break;
      }
    }
  }
}

