/**
 * Gets launches data from api.
 *
 * @return {*} The launches data in JSON format.
 */
export const loadLaunchesData = () => {
  return getData("https://api.spacexdata.com/v4/launches");
};

/**
 * Gets crew data from api.
 *
 * @return {*} The crew data in JSON format.
 */
export const loadCrewData = () => {
  return getData("https://api.spacexdata.com/v4/crew");
};

/**
 * Gets payload data from api.
 *
 * @return {*} The payload data in JSON format.
 */
export const loadPayloadData = () => {
  return getData("https://api.spacexdata.com/v4/payloads");
};

/**
 * Gets capsules data from api.
 *
 * @return {*} The capsules data in JSON format.
 */
export const loadCapsulesData = () => {
  return getData("https://api.spacexdata.com/v4/capsules");
};

/**
 * Gets data from external api via fetch call.
 *
 * @param {string} url The url to the api.
 * @return {*} The data from the api in JSON format
 */
const getData = async (url: string) => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
