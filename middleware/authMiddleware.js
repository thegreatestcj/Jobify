import { token } from "morgan";
import { BadRequestError, UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError('authentication invalid');

    try {
        const { userId, role } = verifyJWT(token);
        const testUser = userId === "66c58e30508b11d1ae8451a3";
        req.user = { userId, role, testUser };
        next();
      } catch (error) {
        throw new UnauthenticatedError('authentication invalid');
      }
}

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError('Demo User. Read Only!');
  next();
}