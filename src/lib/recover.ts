import cacheService from '../services/cache';
import appInfo from '../config/appInfo';

export default async function recover<T = unknown>(
  key: string
): Promise<T | null> {
  const result = await cacheService.recover<T>(key, appInfo.name);
  return result;
}
