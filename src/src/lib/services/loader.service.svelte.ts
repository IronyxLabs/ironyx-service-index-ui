import { loaderStore } from "./loader.store";

export class LoaderService {
  public show(key: string = '') {
    loaderStore.show(key);
  }

  public hide(key: string = '') {
    loaderStore.hide(key);
  }
}

export const loaderService = new LoaderService();