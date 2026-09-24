export class LoaderStore {
  private readonly _loaders: Map<string, number> = new Map<string, number>([['', 0]]);

  public shown(key: string = '') : boolean {
    return (this._loaders.get(key) ?? 0) > 0;
  }
  
  public show(key: string = '') {
    let counter = 0;
    if (this._loaders.has(key)) counter = this._loaders.get(key)!;

    this._loaders.set(key, counter + 1);
  }

  public hide(key: string = '') {
    if (this._loaders.has(key)) this._loaders.set(key, this._loaders.get(key)! - 1);
  }
}

export const loaderStore = new LoaderStore();