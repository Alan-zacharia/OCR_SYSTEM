import * as dotenv from "dotenv";
dotenv.config();

const envConfig =  {
     PORT : process.env.PORT || 3000 as number,
     CLIENT_URL : process.env.CLIENT_URL ,
};

export default envConfig;
 