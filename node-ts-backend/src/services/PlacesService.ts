import axios, { AxiosResponse } from 'axios';

export async function getPlaces(searchText: string, lat: number, lng: number) {
    try {
        let url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchText}&inputtype=textquery&locationbias=circle:${lat},${lng}&fields=place_id,formatted_address,name&key=AIzaSyCHtYYV35BG_vTnx1vW-KRvou9vhoQfEV4`

        let result: AxiosResponse = await axios.get(url);

        return result.data.candidates;
    } catch (error) {
        return {
            places: [] as any,
            error: error
        };
    }
}
