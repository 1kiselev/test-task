import axios from "axios";

export default defineEventHandler(async () => {
    // const body = await readBody(event);
    // const runtimeConfig = useRuntimeConfig();
    // return '123'

    const options = {
        method: 'GET',
        url: 'https://api.football-data.org/v4/competitions/PL/teams',
        headers: {
          'X-Auth-Token': '996b50c06cac461294b55515a2cef899', 
        }, 
      };
      
      try {
          const response = await axios.request(options);
          return {
            data: response.data
          };
      } catch (error) {
          return error;
      }
  
  });
