import { ParticipantModule } from './participant.module';

describe('ParticipantModule', () => {
  let participantModule: ParticipantModule;

  beforeEach(() => {
    participantModule = new ParticipantModule();
  });

  it('should create an instance', () => {
    expect(participantModule).toBeTruthy();
  });
});
