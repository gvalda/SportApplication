export const typedObjectKeys = <T extends object, TKey extends keyof T>(obj: T) =>
  Object.keys(obj) as [TKey, ...TKey[]];

export const typedObjectEntries = <T extends object, TKey extends keyof T>(obj: T) =>
  Object.entries(obj) as {
    [K in TKey]: [K, T[K]];
  }[TKey][];

export const toAction = <R extends Promise<void>>(actionPromise: (() => R) | R) =>
  void (typeof actionPromise === 'function' ? actionPromise() : actionPromise).catch(console.error);

export const makeUrlFromPath = (relativePath: string) => new URL(relativePath, window.location.origin).href;

export const encodeQueryParams = (params: Record<string, string | number | boolean>) =>
  Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
