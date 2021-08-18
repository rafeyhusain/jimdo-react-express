import { getPlaces } from "./PlacesService";

describe("test getPlaces", () => {
  it("getPlaces('@', 1, 1) should return 0 place", () => {
    return getPlaces("@", 1, 1)
    .then(data => expect(data).toEqual([]));
  });
});
