import config from './config/config.config.js';
import http from 'http';
import httpShutdown from "http-shutdown";

const framework = config.framework;

let httpServer = http.Server(framework);

// Wrap the server object with kkkadditional functionality.
httpServer = httpShutdown(httpServer);

httpServer.once("close", function () {
    logger.log(" Server closed.");
});

httpServer.once("error", function (err) {
    logger.log(" Server Error:");
    logger.log(err);
});

const port = config.environment.PORT
httpServer.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})