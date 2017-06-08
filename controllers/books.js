/* eslint linebreak-style: ["error", "windows"] */

class BooksController {
  contructor(Books) {
    this.Books = Books;
  }

  getAll() {
    return this.Books.findAll({})
      .then(result => result);
  }
}

export default BooksController;
