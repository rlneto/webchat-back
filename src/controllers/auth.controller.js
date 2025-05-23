export const signup = (req, res) => {
	const { fullName, email, password } = req.body;
	res.send("Rota de signup");
};
export const login = (req, res) => {
	res.send("Rota de login");
};
export const logout = (req, res) => {
	res.send("Rota de logout");
};
