import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";

const TOKEN_URL = "https://api.intra.42.fr/oauth/token";
const USER_URL = "https://api.intra.42.fr/v2/users/";

const GRANT_TYPE = "authorization_code";

export const fetchToken = async (code) => {
  const data = await axios.post(TOKEN_URL, {
    grant_type: GRANT_TYPE,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code,
    redirect_uri: REDIRECT_URL,
  });
  await SecureStore.setItemAsync("token", data.data.access_token);
  return data;
};

export const renewToken = async (refreshToken) => {
  return new Promise(async (resolve, reject) => {
    return await axios
      .post(TOKEN_URL, {
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: refreshToken,
      })
      .then((value) => {
        resolve(value.data);
      });
  });
};

export const getTokenFromStorage = async () => {
  return await SecureStore.getItemAsync("token");
};

export const handleTokenExpiration = async (dispatch) => {
  const tokenInfo = await getTokenFromStorage("token");
  const date = new Date().getTime() / 1000;
  if (!tokenInfo) throw "No token found";
  const { expires_in: expire, created_at: createdAt } = JSON.parse(tokenInfo);
  if (createdAt + expire > date) {
    return { refreshed: false, tokenInfo: JSON.parse(tokenInfo) };
  } else {
    const { refresh_token } = JSON.parse(tokenInfo);
    const newTokenInfo = await renewToken(refresh_token);
    const newTokenInfoString = JSON.stringify(newTokenInfo);
    await SecureStore.setItemAsync("token", newTokenInfoString);
    dispatch({ type: "RESTORE_TOKEN", token: newTokenInfo.access_token });
    return { refreshed: true, tokenInfo: newTokenInfo };
  }
};


