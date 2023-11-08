import { getData } from '../getProdctsByCategory'; // Remplacez par le chemin correct de votre module API



const testCategory = 'phone';
const testUrl = `https://jsonserver.reactbd.com/${testCategory}`;

test('getData effectue une requête HTTP et renvoie des données', async () => {
  const testData = { key: 'value' };

  fetch.mockResponseOnce(JSON.stringify(testData));

  const result = await getData(testCategory);

  expect(fetch).toHaveBeenCalledTimes(1)

  expect([result]).toHaveLength(1);

  expect(result).toEqual(testData);
});
