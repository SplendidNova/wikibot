const config = {
    API_PATH: 'https://zh.moegirl.org.cn/api.php', // 主站api地址
    CM_API_PATH: 'https://commons.moegirl.org.cn/api.php', // 共享站api地址
    username: '',
    password: '',
};
// 自动更新
import dotenv from 'dotenv';
dotenv.config();
config.username = process.env.MW_USERNAME || config.username;
config.password = process.env.MW_PASSWORD || config.password;
export default config;
