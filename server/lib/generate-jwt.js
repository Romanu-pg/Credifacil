const jwt = require("jsonwebtoken");

const generateToken = (req, res) => {
  const data = req.data.length > 0 ? req.data[0] : req.data.data;

  req.auth = {
    id: data.id,
    email: data.email,
    identificador: data.identificador,
  };

  const secretKey = process.env.JWT_SECRET_KEY;

  const expirationTokenInSeconds = Number(process.env.JWT_EXPIRATION) || 60 * 5;
  const expirationRefresTokenInSeconds =
    Number(process.env.JWT_REFRESH_EXPIRATION) || 60 * 262974;

  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + expirationTokenInSeconds,
      id: req.auth.id,
      email: req.auth.email,
      identificador: req.auth.identificador,
    },
    secretKey
  );

  const refreshToken = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + expirationRefresTokenInSeconds,
      id: req.auth.id,
      email: req.auth.email,
      identificador: req.auth.identificador,
    },
    secretKey
  );

  req.token = token;
  req.refreshToken = refreshToken;

  res.setHeader("x-auth-token", token);
  res.setHeader("x-refresh-token", refreshToken);

  const _data = req.data;

  return res.status(200).json({ ..._data });
};

module.exports = {
  generateToken,
};
