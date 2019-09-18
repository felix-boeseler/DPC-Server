const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');
// const App = require('./app');

// const app = new App(config);
// app.launch()
//   .then(() => {
//     logger.info('Server launched');
//   })
//   .catch((error) => {
//     logger.error('found error, shutting down server');
//     app.close()
//       .catch(closeError => logger.error(closeError))
//       .finally(() => logger.error(error));
//   });
const launchServer = async () => {
  try {
    this.expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    await this.expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error(error);
    await this.close();
  }
};

launchServer().catch(e => logger.error(e));

// { id: "1212", timeStamp: 12321, bloodSugar: 20, insulinIntakes: [{ semanticIdentefier: "mealBolus", amout: 2 }], foodIntake: [], insulinIntakes: [{ semanticIdentefier: "mealBolus", amount: 3 }] }
global.entries = [];
global.food = [{ id: "asdasds", name: "Pizza", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds2", name: "Pasta", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds3", name: "Nüsse", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds4", name: "Pasta mit soße", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds5", name: "Zucker", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds6", name: "Schnitzel", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds7", name: "Cola", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds8", name: "Apfel-Schorle", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds9", name: "Brot", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds10", name: "Pumpernickel", resorption: "medium", carbsFactor: 0.5, comment: "asdad" },
{ id: "asdasds11", name: "Frühstücks-Brot", resorption: "medium", carbsFactor: 0.5, comment: "asdad" }
];