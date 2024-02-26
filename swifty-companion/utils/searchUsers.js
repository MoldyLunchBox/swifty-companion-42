import { handleTokenExpiration } from "./tokenFunctions";
import axios from "axios";
import { FETCH_USER_URL,FETCH_ME_URL} from "@env";


export const fetchUser = async (user, dispatch, signOut) => {
    const { tokenInfo } = await handleTokenExpiration(dispatch);

    const { access_token } = tokenInfo;
    return new Promise(async (resolve, reject) => {
      console.log( ' link ',FETCH_USER_URL + user)

      return await axios
        .get(user == 'me' ?FETCH_ME_URL: FETCH_USER_URL + user, {
          headers: { Authorization: `Bearer ${access_token}` },
        })
        .then((value) => {
          console.log(value)
          const data = {}
          const strings =  ['login','image','last_name','campus','projects_users','cursus_users','wallet', 'correction_point', 'cursus_users', 'displayname', 'kind', 'location']
          strings.map(key=>  data[key] = value.data[key] )
          resolve(data);
        })
        .catch((error) => {
          if (error.response.status == 401)
          signOut()
          console.log()
          console.log("error:error:", error);
          reject("User not found!:", error);
        });
    });
  };
