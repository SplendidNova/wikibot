const config = {
    API_PATH: 'https://mzh.moegirl.org.cn/api.php', // api.php地址
    CM_API_PATH: 'https://commons.moegirl.org.cn/api.php',
    username: '',
    password: '',
};
// 自动更新
import dotenv from 'dotenv';
dotenv.config();
config.username = process.env.MW_USERNAME || config.username;
config.password = process.env.MW_PASSWORD || config.password;
export default config;