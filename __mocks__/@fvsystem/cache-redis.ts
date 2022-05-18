import {
  FakeCacheProvider,
  SaveOptions,
  Data,
  CacheTemplate,
} from '@fvsystem/cache-template';

class CacheProvider {
  config: any;

  cacheProvider: CacheTemplate;

  constructor(config: any) {
    this.config = config;
    this.cacheProvider = new FakeCacheProvider();
  }

  async save<T = unknown>(
    data: Data<T>,
    prefix: string,
    options?: SaveOptions
  ): Promise<void> {
    await this.cacheProvider.save(data, prefix, options);
  }

  async recover<T = unknown>(key: string, prefix: string): Promise<T | null> {
    return this.cacheProvider.recover(key, prefix);
  }
}

export default CacheProvider;
