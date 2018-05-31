import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  let sharedmaterialModule: MaterialModule;

  beforeEach(() => {
    sharedmaterialModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(sharedmaterialModule).toBeTruthy();
  });
});
