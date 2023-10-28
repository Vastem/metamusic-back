export default class NoDataFoundError extends Error{
    constructor(message) {
        super(message);
        this.name = 'NoDataFoundError';
        this.statusCode = 404;
  }
}