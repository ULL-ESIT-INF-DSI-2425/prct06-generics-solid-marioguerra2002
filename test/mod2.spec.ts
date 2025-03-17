import { describe, it, expect, vi } from 'vitest';
import { Mobile } from '../src/modificacion2/mobile_observer.js'
import { Panel } from '../src/modificacion2/panel_observer.js';
import { EventoMetereologico } from '../src/modificacion2/events_enum.js';
import { Station } from '../src/modificacion2/event_observable.js';
import { Observer } from '../src/modificacion2/observer.js';
import { Observable } from '../src/modificacion2/observable.js';
import { stat } from 'fs';

describe ("Station observable", () => {
  it ("Should be defined", () => {
    const station = new Station(EventoMetereologico.No_Evento, []);
    expect(station).toBeDefined();
  });
  it ("Should have an empty array of observers", () => {
    const station = new Station(EventoMetereologico.No_Evento, []);
    expect(station.getObservers()).toEqual([]);
  });
  it ("Should have an event type of Rain", () => {
    const station = new Station(EventoMetereologico.Lluvia, []);
    expect(station.getEventType()).toBe(EventoMetereologico.Lluvia);
  });
  it ("Should have an event type of Temperature Increase", () => {
    const station = new Station(EventoMetereologico.Aumento_Temperatura, []);
    expect(station.getEventType()).toBe(EventoMetereologico.Aumento_Temperatura);
  });
  it ("Should have an event type of Temperature Decrease", () => {
    const station = new Station(EventoMetereologico.Disminucion_Temperatura, []);
    expect(station.getEventType()).toBe(EventoMetereologico.Disminucion_Temperatura);
  });
  it ("Should have an event type of Storm", () => {
    const station = new Station(EventoMetereologico.Tormenta, []);
    expect(station.getEventType()).toBe(EventoMetereologico.Tormenta);
  });
  it ("Should have an event type of No Event", () => {
    const station = new Station(EventoMetereologico.No_Evento, []);
    expect(station.getEventType()).toBe(EventoMetereologico.No_Evento);
  });

  it ("Should subscribe an observer", () => {
    const station = new Station(EventoMetereologico.No_Evento, []);
    const observer: Observer = {
      update: (observable: Observable) => {}
    };
    station.subscribe(observer);
    expect(station.getObservers()).toEqual([observer]);
  });

  it ("Should unsubscribe an observer", () => {
    const observer: Observer = {
      update: (observable: Observable) => {}
    };
    const station = new Station(EventoMetereologico.No_Evento, [observer]);
    station.unsubscribe(observer);
    expect(station.getObservers()).toEqual([]);
  });

  it ("Should notify all observers", () => {
    const observer1: Observer = {
      update: (observable: Observable) => {}
    };
    const observer2: Observer = {
      update: (observable: Observable) => {}
    };
    const station = new Station(EventoMetereologico.No_Evento, [observer1, observer2]);
    station.notify();
    expect(station.getObservers()).toEqual([observer1, observer2]);
  });
  it ("Error when unsubscribing an observer that is not subscribed", () => {
    const observer: Observer = {
      update: (observable: Observable) => {}
    };
    const station = new Station(EventoMetereologico.No_Evento, []);
    expect(() => station.unsubscribe(observer)).toThrowError('Observer not subscribed');
  });
  it ("Error when subscribing an observer that is already subscribed", () => {
    const observer: Observer = {
      update: (observable: Observable) => {}
    };
    const station = new Station(EventoMetereologico.No_Evento, [observer]);
    expect(() => station.subscribe(observer)).toThrowError('Observer already subscribed');
  });
});

describe ("Mobile observer", () => {
  it ("Should be defined", () => {
    const mobile = new Mobile("Iphone", "14", "1");
    expect(mobile).toBeDefined();
  });
  it ("Update method should be called storming", () => {
    const mobile = new Mobile("Iphone", "14", "1");
    const station = new Station(EventoMetereologico.Tormenta, []);
    station.subscribe(mobile);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Iphone says: It's storming`);
  });
  it ("Update method should be called temperature increase", () => {
    const mobile = new Mobile("Iphone", "14", "1");
    const station = new Station(EventoMetereologico.Aumento_Temperatura, []);
    station.subscribe(mobile);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Iphone says: Temperature is increasing`);
  });
  it ("Update method should be called temperature decrease", () => {
    const mobile = new Mobile("Iphone", "14", "1");
    const station = new Station(EventoMetereologico.Disminucion_Temperatura, []);
    station.subscribe(mobile);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Iphone says: Temperature is decreasing`);
  });
  it ("Update method should be called rain", () => {
    const mobile = new Mobile("Iphone", "14", "1");
    const station = new Station(EventoMetereologico.Lluvia, []);
    station.subscribe(mobile);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Iphone says: It's raining`);
  });
});

describe ("Panel observer", () => {
  it ("Should be defined", () => {
    const panel = new Panel("12:00", "north");
    expect(panel).toBeDefined();
  });
  it ("Update method should be called storming", () => {
    const panel = new Panel("12:00", "north");
    const station = new Station(EventoMetereologico.Tormenta, []);
    station.subscribe(panel);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Its 12:00: It's storming in the north`);
  });
  it ("Update method should be called temperature increase", () => {
    const panel = new Panel("12:00", "north");
    const station = new Station(EventoMetereologico.Aumento_Temperatura, []);
    station.subscribe(panel);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Its 12:00: Temperature is increasing in the north`);
  });
  it ("Update method should be called temperature decrease", () => {
    const panel = new Panel("12:00", "north");
    const station = new Station(EventoMetereologico.Disminucion_Temperatura, []);
    station.subscribe(panel);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Its 12:00: Temperature is decreasing in the north`);
  });
  it ("Update method should be called rain", () => {
    const panel = new Panel("12:00", "north");
    const station = new Station(EventoMetereologico.Lluvia, []);
    station.subscribe(panel);
    const consoleSpy = vi.spyOn(console, 'log');
    station.notify();
    expect(consoleSpy).toHaveBeenCalledWith(`Its 12:00: It's raining in the north`);
  });
});