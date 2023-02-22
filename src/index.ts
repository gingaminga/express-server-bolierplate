import "reflect-metadata";
import "@utils/env";
import app from "@/app";
import { getServer } from "@/server";
import { essentialInitLoader } from "@loaders/essential.loader";
import constants from "@utils/constants";
import logger from "@utils/logger";

const { PORT } = constants;

const server = getServer(app);

server.listen(PORT, () => {
  logger.info(`Hello! Start ${constants.PROJECT_NAME} API Server on port ${PORT} :)`);

  essentialInitLoader();
});
