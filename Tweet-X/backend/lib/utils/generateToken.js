import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const userIdString = userId.toString();
  const token = jwt.sign({ userId: userIdString }, "###1234#data", {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
