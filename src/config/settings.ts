import * as config from 'cosmiconfig';

export class Settings {
  private _cosmiconfig;

  constructor() {
    this._cosmiconfig = config.cosmiconfigSync;
  }
  loading() {
    const explorer = this._cosmiconfig('lint-prepush', {
      searchPlaces: [
        'package.json',
        '.lint-prepushrc',
        '.lint-prepush.json',
        '.lint-prepush.yaml',
        '.lint-prepush.yml',
        '.lint-prepush.js',
        '.lint-prepush.cjs',
        'lint-prepush.config.js',
        'lint-prepush.config.cjs',
      ],
    });
    return explorer.search();
  }
}
