const server = require("./api/server.js");
const port = process.env.PORT || 2525;

//I'm adding a comment in vim
server.listen(port, () => console.log(`Server is listening on port ${port}`));
