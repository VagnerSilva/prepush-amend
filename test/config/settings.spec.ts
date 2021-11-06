import { Settings } from '../../dist/config/settings';

describe('Settings', () => {
  test('loading config', () => {
    const mockValue = {
      '.ts': ['eslint --fix'],
    };
    const settings = new Settings();
    settings['_cosmiconfig'] = jest.fn().mockReturnValue({
      search: () => mockValue,
    });
    expect(settings.loading()).toBe(mockValue);
  });
});
