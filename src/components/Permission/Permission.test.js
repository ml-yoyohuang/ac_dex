import {
  render,
  wait,
  cleanup,
} from '@testing-library/vue';

import Permission from './Permission.vue';


describe('Permission', () => {
  afterEach(cleanup);

  test('Permission User', async () => {
    const { getByTestId } = render(Permission);

    await wait(() => {
      expect(getByTestId('text').textContent.trim()).toBe('User');
    });
  });
  test('Permission Admin', async () => {
    const { getByTestId } = render(Permission, {
      propsData: {
        permissionCode: 1,
      },
    });
    await wait(() => {
      expect(getByTestId('text').textContent.trim()).toBe('Admin');
    });
  });
});
