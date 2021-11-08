import { commandSync } from 'execa';

const NO_SUBMODULE_RECURSE = ['-c', 'submodule.recurse=false'];

export class Git {
  private _exe;
  constructor() {
    this._exe = commandSync;
  }

  showUnstagedFiles() {
    const { stdout } = this._exe(
      'git ls-files . --exclude-standard --others -m',
      {}
    );
    return stdout;
  }
  isUnstaged(): boolean {
    const { stdout } = this._exe(
      'git ls-files . --exclude-standard --others -m',
      {}
    );
    return stdout === '';
  }

  addAll(): void {
    this._exe('git add .');
  }

  amend(): void {
    this._exe('git commit --amend');
  }
}
