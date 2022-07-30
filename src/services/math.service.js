class math {
  constructor() {}
  #plus(n1, n2) {
    return n1 + n2;
  }
  #less(n1, n2) {
    return n1 - n2;
  }
  #multiply(n1, n2) {
    return n1 * n2;
  }
  #divide(n1, n2) {
    return n1 / n2;
  }
  calculate(n1, n2, action) {
    switch (action) {
      case "plus":
        this.plus(n1, n2);
        break;
      case "less":
        this.less(n1, n2);
        break;
      case "multiply":
        this.multiply(n1, n2);
        break;
      case "divide":
        this.divide(n1, n2);
        break;
      default:
        break;
    }
  }
}

const maths = new math()

export default maths