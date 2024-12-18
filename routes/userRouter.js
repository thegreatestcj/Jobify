import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/userController.js";
import upload from "../middleware/multerMiddleware.js";
import { authorizePermissions, validateUpdateUserInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [authorizePermissions('admin'), getApplicationStats]);
router.patch('/update-user', upload.single('avatar'), validateUpdateUserInput, updateUser);

export default router;