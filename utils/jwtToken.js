export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
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
