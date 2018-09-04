import { EventModule } from './event.module';

describe('EventModule', () => {
  let eventModule: EventModule;

  beforeEach(() => {
    eventModule = new EventModule();
  });

  it('should create an instance', () => {
    expect(eventModule).toBeTruthy();
  });
});
