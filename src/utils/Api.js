import axios from "axios";

//process.env.REACT_APP_BASE_URL
const baseURL = "https://run.mocky.io";

const instance = axios.create({
  baseURL,
});

const VERSION = {
  V3: "v3",
};

export const API_ROUTE = {
  USER_HOLDINGS: `${VERSION.V3}/bde7230e-bc91-43bc-901d-c79d008bddc8`,
};

export default instance;
