import { handleTokenExpiration } from "./tokenFunctions";
import axios from "axios";
import { FETCH_USER_URL} from "@env";

export const fetchUser = async (user, dispatch) => {
    const { tokenInfo } = await handleTokenExpiration(dispatch);
    const { access_token } = tokenInfo;
    return new Promise(async (resolve, reject) => {
      return await axios
        .get(FETCH_USER_URL + user, {
          headers: { Authorization: `Bearer ${access_token}` },
        })
        .then((value) => {
          const data = {}
          const strings =  ['login','image','last_name','campus','projects_users','cursus_users','wallet', 'correction_point', 'cursus_users', 'displayname', 'kind', 'location']
          
          
          console.log('=========')
          strings.map(key=>  data[key] = value.data[key] )
          resolve(data);
        })
        .catch((error) => {
          console.log("error:error:", error);
          reject("User not found!:", error);
        });
    });
  };