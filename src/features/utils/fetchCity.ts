import axios from 'axios';

const getCoords = (): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude: lat, longitude: lng } = pos.coords;
        return resolve([lat, lng]);
      },
      err => {
        return reject(err.message);
      }
    );
  });
};

const fetchCity = async (): Promise<string> => {
  try {
    const [lat, lng] = await getCoords();

    const res = await axios.get<{ city: string }>(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    return res.data.city;
  } catch (err) {
    throw Error(err as string);
  }
};

export default fetchCity;
