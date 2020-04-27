/**
 * @jest-environment node
 */

import { fetchData } from '../api';

jest.mock('../api', () => ({
  fetchData: jest.fn(),
}));

describe('api2', () => {
  test('fetchData', async () => {
    const mockResponse = [
      {
        name: 'milkmidi',
        age: 18,
      },
      {
        name: 'milkmidi2',
        age: 30,
      },
    ];
    fetchData.mockResolvedValueOnce(mockResponse);
    const result:string[] = await fetchData();
    expect(result.length).toBe(2);
    expect(fetchData).toHaveBeenCalled();
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});
