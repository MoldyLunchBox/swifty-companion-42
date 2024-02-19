import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
  } from "react";
  import * as SecureStore from "expo-secure-store";
  import axios from "axios";
  import { handleTokenExpiration, newToken } from "../utils/tokenFunctions";
  import { makeRedirectUri } from "expo-auth-session";
import { useAuthRequest } from 'expo-auth-session'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";
  
  const TOKEN_URL = "https://api.intra.42.fr/oauth/token";
  
  const GRANT_TYPE = "authorization_code";
  
  const AuthContext = createContext(null);
  
  export function useAuthContext() {
    return useContext(AuthContext);
  }
  
  export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(
      (prevState, action) => {
        if (action.type === "SIGN_IN") {
          return {
            ...prevState,
            online: true,
            userToken: action.token,
          };
        } else if (action.type === "SIGN_OUT") {
          return {
            ...prevState,
            online: false,
            userToken: null,
          };
        } 
        // Default return in case action.type does not match any case
        return prevState;
      },
      {
        isLoading: true,
        online: false,
        userToken: null,
        light: true,
      }
    );
    useEffect(() => {
    
      const bootstrapAsync = async () => {
        let userToken;
        try {
          const { tokenInfo } = await handleTokenExpiration(dispatch);
          if (!tokenInfo.refreshed) {
            dispatch({ type: "SIGN_IN", token: tokenInfo.access_token });
          }
        } catch (e) {
          dispatch({ type: "SIGN_OUT" });
          // Restoring token failed
        }
  
      };
  
      bootstrapAsync();
    }, []);
  
    const authContext = React.useMemo(
      () => ({
        signIn: async (code) => {
          console.log('hello im here')
          let data;
          try {
            data = await axios.post(TOKEN_URL, {
              grant_type: GRANT_TYPE,
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              code: code,
              redirect_uri: REDIRECT_URL,
            });
          } catch (error) {
            console.log("error:", error);
          }
          const tokenInfo = JSON.stringify(data.data);
          console.log('token is ',data.data.access_token)
          await SecureStore.setItemAsync("token", tokenInfo);
          dispatch({ type: "SIGN_IN", token: data.data.access_token });
        },
        newToken: async (newToken) => {
          let data;
          try {
            data = await axios.post(TOKEN_URL, {
              grant_type: "refresh_token",
              refresh_token: `${newToken}`,
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
            });
          } catch (error) {
            console.log("error:", error);
          }
          const tokenInfo = JSON.stringify(data.data);
          await SecureStore.setItemAsync("token", tokenInfo);
          dispatch({ type: "SIGN_IN", token: data.data.access_token });
        },
        signOut: async () => {
          await SecureStore.deleteItemAsync("token");
          dispatch({ type: "SIGN_OUT" });
        },
        
        state: state,
        dispatch: dispatch,
      }),
      [state]
    );
  
    return (
      <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
    );
  }
  