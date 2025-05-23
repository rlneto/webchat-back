import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
	res.send("Rota de signup");
});
router.get("/login", (req, res) => {
	res.send("Rota de login");
});
router.get("/logout", (req, res) => {
	res.send("Rota de logout");
});

export default router;
