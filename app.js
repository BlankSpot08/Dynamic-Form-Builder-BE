import config from './config'

const framework = config.framework;

let httpServer = require("http").Server(framework);

// Wrap the server object with kkkadditional functionality.
httpServer = require("http-shutdown")(httpServer);

httpServer.once("close", function () {
    logger.log(" Server closed.");
});

httpServer.once("error", function (err) {
    logger.log(" Server Error:");
    logger.log(err);
});

httpServer.listen(config.environment.PORT)