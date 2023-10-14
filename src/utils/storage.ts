import { Cookies } from 'react-cookie';
import { CookieGetOptions, CookieSetOptions } from 'universal-cookie';

class Storage {
  private cookies: Cookies;
  private cookieOption: CookieSetOptions;

  constructor() {
    this.cookies = new Cookies();
    this.cookieOption = {
      path: '/',
    };
  }

  setCookie<T>(name: string, value: T, options: CookieSetOptions = {}) {
    this.cookies.set(name, value, {
      ...this.cookieOption,
      ...options,
    });
  }

  getCookie<T>(name: string, options?: CookieGetOptions): T {
    return this.cookies.get<T>(name, options);
  }

  removeCookie(name: string, options: CookieGetOptions = {}) {
    this.cookies.remove(name, { ...this.cookieOption, ...options });
  }

  setStorage<T>(key: string, value: T) {
    if (!window.localStorage) {
      return;
    }
    try {
      const lsValue = JSON.stringify(value);
      window.localStorage.setItem(key, lsValue);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`${key} LOCAL STORAGE SAVE ERROR`, error);
    }
  }

  getStorage<T = any>(key: string, defaultValue: T): T {
    if (typeof window !== 'undefined') {
      if (!window.localStorage) {
        return defaultValue;
      }
      const lsValue: string | null = window.localStorage.getItem(key);
      if (!lsValue) {
        return defaultValue;
      }
      try {
        const store: T = JSON.parse(lsValue) as T;
        if (!store) {
          return defaultValue;
        }
        return store;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`${key} LOCAL STORAGE PARSE ERROR`, error);
      }
    }

    return defaultValue;
  }

  removeStorage(...keys: string[]): void {
    if (typeof window !== 'undefined') {
      keys.forEach((key) => window.localStorage.removeItem(key));
    }
  }
}

const storageHelper = new Storage();

export default storageHelper;
