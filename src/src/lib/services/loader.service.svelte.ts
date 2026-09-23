export class LoaderService {
  public loading: boolean = $state(false);

  public show() {
    this.loading = true;
  }

  public hide() {
    this.loading = false;
  }
}

export const loaderService = new LoaderService();