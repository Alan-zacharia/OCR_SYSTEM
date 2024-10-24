import * as dotenv from "dotenv";
dotenv.config();

const envConfig =  {
     PORT : process.env.PORT || 3000 as number,
};

export default envConfig;
 