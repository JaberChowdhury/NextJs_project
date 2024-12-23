import { HEXADECIMAL_COLOR } from "./../lib/colorUtils/TYPES";

interface FAVOURITE_COLOR extends HEXADECIMAL_COLOR {
  id: string;
}
const favouriteColors: FAVOURITE_COLOR[] = [
  {
    color: "#FF0000",
    id: "70873a71-fe60-4bc0-ba7f-5b8dcd7acfdf",
    r: "ff",
    g: "00",
    b: "00",
  },
];

const getFavoriteColors = (): Promise<FAVOURITE_COLOR[]> =>
  Promise.resolve([...favouriteColors]);

const addFavoriteColor = (color: FAVOURITE_COLOR): Promise<FAVOURITE_COLOR> => {
  favouriteColors.push(color);
  return Promise.resolve(color);
};

export { addFavoriteColor };
export default getFavoriteColors;
