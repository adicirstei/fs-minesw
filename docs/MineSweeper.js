define(["exports", "fable-core"], function (exports, _fableCore) {
  "use strict";

  exports.__esModule = true;
  exports.Win = exports.GameState = exports.GameModel = exports.CellState = exports.Level = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Level = exports.Level = function () {
    function Level(caseName, fields) {
      _classCallCheck(this, Level);

      this.Case = caseName;
      this.Fields = fields;
    }

    Level.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    Level.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return Level;
  }();

  _fableCore.Util.setInterfaces(Level.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "MineSweeper.Level");

  var CellState = exports.CellState = function () {
    function CellState(caseName, fields) {
      _classCallCheck(this, CellState);

      this.Case = caseName;
      this.Fields = fields;
    }

    CellState.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    CellState.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return CellState;
  }();

  _fableCore.Util.setInterfaces(CellState.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "MineSweeper.CellState");

  var GameModel = exports.GameModel = function () {
    function GameModel(level, cols, rows, grid) {
      _classCallCheck(this, GameModel);

      this.level = level;
      this.cols = cols;
      this.rows = rows;
      this.grid = grid;
    }

    GameModel.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsRecords(this, other);
    };

    GameModel.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareRecords(this, other);
    };

    return GameModel;
  }();

  _fableCore.Util.setInterfaces(GameModel.prototype, ["FSharpRecord", "System.IEquatable", "System.IComparable"], "MineSweeper.GameModel");

  var GameState = exports.GameState = function () {
    function GameState(caseName, fields) {
      _classCallCheck(this, GameState);

      this.Case = caseName;
      this.Fields = fields;
    }

    GameState.prototype.Equals = function Equals(other) {
      return _fableCore.Util.equalsUnions(this, other);
    };

    GameState.prototype.CompareTo = function CompareTo(other) {
      return _fableCore.Util.compareUnions(this, other);
    };

    return GameState;
  }();

  _fableCore.Util.setInterfaces(GameState.prototype, ["FSharpUnion", "System.IEquatable", "System.IComparable"], "MineSweeper.GameState");

  var Win = exports.Win = function ($exports) {
    var canvas = $exports.canvas = document.getElementsByTagName('canvas')[0];
    var context = $exports.context = canvas.getContext('2d');

    var rgb = $exports.rgb = function rgb(r, g, b) {
      return _fableCore.String.fsFormat("rgb(%d,%d,%d)")(function (x) {
        return x;
      })(r)(g)(b);
    };

    var filled = $exports.filled = function filled(color, rect_0, rect_1, rect_2, rect_3) {
      var rect = [rect_0, rect_1, rect_2, rect_3];
      var ctx = context;
      ctx.fillStyle = color;

      (function (tupledArg) {
        ctx.fillRect(tupledArg[0], tupledArg[1], tupledArg[2], tupledArg[3]);
      })(rect);
    };

    var dimensions = $exports.dimensions = function dimensions() {
      return [canvas.width, canvas.height];
    };

    return $exports;
  }({});
});