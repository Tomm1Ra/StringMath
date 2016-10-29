var assert = require('assert');
var stringSum = require("../stringSum").stringSum;
var stringSubtract = require("../stringSubtract").stringSubtract;
var stringMultiply = require("../stringMultiply").stringMultiply;
var stringDiv = require("../stringDiv").stringDiv;
var stringPowOpt = require("../stringPow").stringPowOpt;
var stringFactorial = require("../stringPow").stringFactorial;
var parseOperator = require("../strMathUtils").parseOperator;
var validateParam = require("../strMathUtils").validateParam;

describe('Add', function() {
  describe('add numbers', function() {
    it('Sum functions should return 21 and 220 ', function() {
      assert.equal("21", stringSum("12","9"));
      assert.equal("220", stringSum("121","99"));
    });
  });
  describe('add no numbers', function() {
    it('Sum functions should return 21 and 22 ', function() {
      assert.equal("21", stringSum("21"));
      assert.equal("22", stringSum("22",""));
    });
  });
});

describe('Subtract', function() {
  describe('subtract numbers', function() {
    it('Subtract functions should return 9 and -2 ', function() {
      assert.equal("9", stringSubtract("12","3"));
      assert.equal("-2", stringSubtract("12","14"));
    });
  });
  describe('subtract no numbers', function() {
    it('Subtract functions should return 21 and -22 ', function() {
      assert.equal("21", stringSubtract("21"));
      assert.equal("-22", stringSubtract("","22"));
    });
  });
});

describe('Multiply', function() {
  describe('multiply numbers', function() {
    it('Multiply functions should return 12 and 125 ', function() {
      assert.equal("12", stringMultiply("4","3"));
      assert.equal("125", stringMultiply("25","5"));
    });
  });
  describe('Multiply no numbers', function() {
    it('Multiply functions should return 0 ', function() {
      assert.equal("0", stringMultiply("21"));
      assert.equal("0", stringMultiply("","22"));
    });
  });
});

describe('Divide', function() {
  describe('divide numbers', function() {
    it('Divide functions should return 2.00 and 0.3333 ', function() {
      assert.equal("2.00", stringDiv("4","2","2"));
      assert.equal("0.3333", stringDiv("33","99","4"));
    });
  });
  describe('Divide no numbers', function() {
    it('Divide functions should return 0 with 2 decimals ', function() {
      assert.equal("0.00", stringDiv("21"));
      assert.equal("0.00", stringDiv("","22"));
    });
  });
});

describe('Power', function() {
  describe('power numbers', function() {
    it('Power functions should return 25 and 256 ', function() {
      assert.equal("25", stringPowOpt("5","2"));
      assert.equal("256", stringPowOpt("2","8"));
    });
  });
  describe('Power no numbers', function() {
    it('Power functions should return 1 and 0', function() {
      assert.equal("1", stringPowOpt("21"));
      assert.equal("0", stringPowOpt("","22"));
    });
  });
});

describe('Factorial', function() {
  describe('Factorial number', function() {
    it('Factorial functions should return 6 and 256 ', function() {
      assert.equal("6", stringFactorial("3"));
      assert.equal("720", stringFactorial("6","8"));
    });
  });
});

describe('ParseOperation', function() {
    it('parse should return opertor ', function() {
      assert.equal("+", parseOperator("44+33"));
      assert.equal("\*", parseOperator("4*6"));
      assert.equal("!", parseOperator("4!"));
      assert.equal("\^", parseOperator("22^3"));
      assert.equal("\/", parseOperator("2j/w2"));
  });
});

describe('ValidateParam', function() {
    it('validate should return number ', function() {
      assert.equal("3", validateParam("a3"));
      assert.equal("4", validateParam("4zz"));
      assert.equal("5", validateParam("z5z"));
      assert.equal("16", validateParam("1z6"));
      assert.equal("123", validateParam("z1cc23"));
  });
});