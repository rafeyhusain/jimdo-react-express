import axios, { AxiosResponse } from 'axios';

export async function getPlaces(searchText: string, lat: number, lng: number) {
    try {
      let url = `http://localhost:8080/places/${searchText}/${lat}/${lng}`
      let result: AxiosResponse = await axios.get(url);

      return result;
  } catch (error) {
      return {
          places: [] as any,
          error: error
      };
  }
}
