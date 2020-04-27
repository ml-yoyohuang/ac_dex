/**
 * @jest-environment node
 */
import moxios from 'moxios';
import axios from 'axios';
import { fetchData } from '../api';

describe('api', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  test('fetchData', async () => {
    expect.assertions(1);
    moxios.stubRequest('/api/data', {
      status: 200,
      response: [
        {
          name: 'milkmidi',
          age: 18,
        },
        {
          name: 'milkmidi2',
          age: 30,
        },
      ],
    });
    const result:string[] = await fetchData();
    expect(result.length).toBe(2);
  });
});
