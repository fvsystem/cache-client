import save from './lib/save';
import recover from './lib/recover';

(async () => {
  const key = 'my-key';
  const data = {
    name: 'John',
    age: 30,
  };

  await save(data, key, { ttlInSeconds: 4 });
  const recovered = await recover(key);

  console.log(recovered);

  setTimeout(() => {
    recover(key).then(console.log);
  }, 5000);
})();
