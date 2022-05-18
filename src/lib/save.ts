import cacheService from '../services/cache';
import appInfo from '../config/appInfo';

export default async function save<T = unknown>(
  item: T,
  key: string,
  option?: { ttlInSeconds?: number }
): Promise<void> {
  await cacheService.save({ data: item, key }, appInfo.name, option);
}
