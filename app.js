import { framework, environment } from './config/config.config.js';
import http from 'http';
import httpShutdown from "http-shutdown";

let httpServer = http.Server(framework);

httpServer = httpShutdown(httpServer);

httpServer.once("close", function () {
    logger.log(" Server closed.");
});

httpServer.once("error", function (err) {
    logger.log(" Server Error:");
    logger.log(err);
});

const port = environment.PORT
httpServer.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})