require("./modulePatch");
const path = require("path");
const { Worker } = require("../src/Worker");

(async () => {
    const worker = new Worker("TEST", 0, {}, path.resolve(process.cwd(), "plugins"));
    await worker.listen();
    await worker.pluginLoader.loadFromDirectory();
    worker.logger.info("Listening on *:22023");
})();