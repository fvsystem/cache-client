import { CacheTemplate } from '@fvsystem/cache-template';
import CacheRedis from '@fvsystem/cache-redis';
import CacheConfig from '../config/cache';

const cacheRedis = new CacheRedis(CacheConfig);

export default cacheRedis as CacheTemplate;
