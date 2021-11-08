import { Git } from '../../src/gitcommand/command';

describe('Git', () => {
  let mockFilesUnstaged: string;
  let git: Git;
  beforeAll(() => {
    mockFilesUnstaged = `a.txt\nb.txt\nc.txt`;
    git = new Git();
    git['_exe'] = jest.fn().mockReturnValue({ stdout: mockFilesUnstaged });
  });
  test('show files unstaged', () => {
    expect(git.showUnstagedFiles()).toBe(mockFilesUnstaged);
  });

  test('Is unstaged', () => {
    expect(git.isUnstaged()).toBe(false);
    git['_exe'] = jest.fn().mockReturnValue({ stdout: '' });
    expect(git.isUnstaged()).toBe(true);
  });

  test('add all', () => {
    git.addAll();
    expect(git['_exe']).toHaveBeenCalled();
  });

  test('amend', () => {
    git.amend();
    expect(git['_exe']).toHaveBeenCalled();
  });
});
