import express from "express";

import { addServiceResult, getServiceResult, deleteServiceResult } from "../Controllers/serviceRresult";

const router = express.Router();

router.post("/:serviceName",addServiceResult)
router.get("/:serviceName",getServiceResult)
router.delete("/:serviceName",deleteServiceResult)

export default router;