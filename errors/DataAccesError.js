export default class DataAccesError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DataAccesError';
    this.statusCode = 500;
  }
}