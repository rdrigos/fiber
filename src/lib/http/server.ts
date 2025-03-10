interface ListenOptions {
  port: number;
  host?: string;
}

export class Fiber {
  private readonly endpoints: Map<string, any>;

  constructor() {
    this.endpoints = new Map();
  }

  public async listen(options: ListenOptions): Promise<void> {
    console.log({
      options,
      endpoints: this.endpoints,
    });
  }
}
