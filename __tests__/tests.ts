import save from '../src/lib/save';
import recover from '../src/lib/recover';

jest.useFakeTimers();

describe('lib test', () => {
  it('should save and recover', async () => {
    const key = 'my-key';
    const data = {
      name: 'John',
      age: 30,
    };

    await save(data, key);
    const recovered = await recover(key);

    expect(recovered).toEqual(data);
  });

  it('should not recover after the time to ttl', async () => {
    const key = 'my-key';
    const data = {
      name: 'John',
      age: 30,
    };

    await save(data, key, { ttlInSeconds: 4 });
    const recovered = await recover(key);

    expect(recovered).toEqual(data);

    jest.runAllTimers();

    const recoveredAfter = await recover(key);

    expect(recoveredAfter).toBeFalsy();
  });
});
