const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to Theo shop");
	}
	if (req.url === "/about") {
		res.end("Here is a bit brief History about us");
	}
	res.end(`
    <a to="/">Go abck</a>
    `);
});

server.listen(5000);
