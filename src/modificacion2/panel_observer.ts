import { Observer } from "./observer.js";
import { EventoMetereologico } from "./events_enum.js";
import { Observable } from "./observable.js";
import { Station } from "./event_observable.js";
/**
* Class Panel that its the observer
*/
export class Panel implements Observer {
  constructor( private hour: string, private state: string ) {}
  getHour(): string {
    return this.hour;
  }
  getState(): string {
    return this.state;
  }

  /**
   * Update method that is called when the observable changes
   * @param observable - The observable that changed its state 
   */
  update(observable: Observable): void {
    if (observable instanceof Station) {
      switch(observable.getEventType()) {
        case EventoMetereologico.Lluvia:
          console.log(`Its ${this.hour}: It's raining in the ${this.state}`);
          break;
        case EventoMetereologico.Aumento_Temperatura:
          console.log(`Its ${this.hour}: Temperature is increasing in the ${this.state}`);
          break;
        case EventoMetereologico.Disminucion_Temperatura:
          console.log(`Its ${this.hour}: Temperature is decreasing in the ${this.state}`);
          break;
        case EventoMetereologico.Tormenta:
          console.log(`Its ${this.hour}: It's storming in the ${this.state}`);
          break;
        default:
          console.log(`Its ${this.hour}: No event`);
          break;
      }
    }
  }
}

