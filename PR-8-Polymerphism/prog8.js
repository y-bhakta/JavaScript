class Logger {
  log(message) {
    console.log("Default Message:", message);
  }
};
class ConsoleLogger extends Logger {
  log(message) {
    console.log("Console Message:", message);
  }
};
class FileLogger extends Logger {
  log(message) {
    console.log("Writing to file Message:", message);
  }
};
class DatabaseLogger extends Logger {
  log(message) {
    console.log("Saving to database Message:", message);
  }
};
function logMessage(logger, message) {
  logger.log(message);
};
logMessage(new ConsoleLogger(), "User logged in Successfully");
logMessage(new FileLogger(), "User order saved Successfully");
logMessage(new DatabaseLogger(), "Error: Database connection failed");