import jwt from 'jsonwebtoken';

export const sendToken = (user, statusCode, message, res) => {

  const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
  };

  let token = jwt.sign(payload,
                                process.env.JWT_SECRET_KEY,
                                {
                                    expiresIn:"2h",
  
  });
  
  // const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + 7*24*60*60*1000
    ),
    httpOnly: true,
  };
  
  res.status(200).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
