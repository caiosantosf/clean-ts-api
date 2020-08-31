export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://admin:admin@cluster0.kadq1.mongodb.net/clean-node-api?retryWrites=true&w=majority',
  port: process.env.port || 5050
}