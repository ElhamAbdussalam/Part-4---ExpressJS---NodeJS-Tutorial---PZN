export const logger = (req, res, next) => {
  console.info(`Receive request: ${req.method} ${req.originalUrl}`);
  next();
};

export const addPoweredHeader = (req, res, next) => {
  res.set("X-Powered-By", "M Elham Abdussalam");
  next();
};

export const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
};
