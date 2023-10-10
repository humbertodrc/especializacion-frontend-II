import { Home } from '../types/house.type';

export const getHouses = async (url: string):Promise<Home[]> => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data.listings;
    } else {
      throw new Error('Error en la llamada');
    }

  } catch (error) {
    throw new Error('Network error')
  }
}