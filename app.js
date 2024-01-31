import { framework, environment } from './config/config.config.js';
import http from 'http';
import httpShutdown from "http-shutdown";

let httpServer = http.Server(framework);

httpServer = httpShutdown(httpServer);

httpServer.once("close", function () {
    console.log(" Server closed.");
});

httpServer.once("error", function (err) {
    console.log(" Server Error:");
    console.log(err);
});

const port = environment.PORT
httpServer.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})