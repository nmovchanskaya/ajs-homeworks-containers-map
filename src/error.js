export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(123, 'Sample error');
    this.errors.set(235, 'Difficult error');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}

const repo = new ErrorRepository();
const res = repo.translate(235);
