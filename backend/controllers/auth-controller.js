// const otpService = require('../services/otp-service');
// const hashService = require('../services/hash-service');
// const userService = require('../services/user-service');
// const tokenService = require('../services/token-service');
// const Userdto = require('../dtos/user-dtos');

// class AuthController {
//     async sendOtp(req, res) {
//         const { phone } = req.body;
//         if (!phone) {
//             res.status(400).json({ message: 'Phone field is required!' });
//         }

//         const otp = await otpService.generateOtp();

//         const ttl = 1000 * 60 * 2; // 2 min
//         const expires = Date.now() + ttl;
//         const data = `${phone}.${otp}.${expires}`;
//         const hash = hashService.hashOtp(data);

//         // send OTP
//         try {
//             // await otpService.sendBySms(phone, otp);
//             res.json({
//                 hash: `${hash}.${expires}`,
//                 phone,
//                 otp,
//             });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json({ message: 'message sending failed' });
//         }
//     }
//     async sendOtpEmail(req, res) {
//         const { email } = req.body;
//         if (!email) {
//             res.status(400).json({ message: 'email field is required!' });
//         }

//         const otp = await otpService.generateOtp();

//         const ttl = 1000 * 60 * 2; // 2 min
//         const expires = Date.now() + ttl;
//         const data = `${email}.${otp}.${expires}`;
//         const hash = hashService.hashOtp(data);

//         // send OTP
//         try {
//             await otpService.sendByEmail(email, otp);
//             res.json({
//                 hash: `${hash}.${expires}`,
//                 email,
//                 otp,
//             });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json({ message: 'message sending failed' });
//         }
//     }
    

//     // logout 

//     async logout(req,res){
//         // delete refresh token from db
//         const {refreshToken} = req.cookies;
//         await tokenService.removeToken(refreshToken);
//         // delete cookies
//         res.clearCookie('refreshToken');
//         res.clearCookie('accessToken');
//         res.json({user:null,auth:false});
//     }
// }

// module.exports = new AuthController();