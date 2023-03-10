import serverless from 'serverless-http';
import app from './app';
import { PORT } from './config/env';

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports.handler = serverless(app);
