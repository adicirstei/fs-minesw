"use strict";

exports.__esModule = true;
exports.t = exports.GameState = exports.Level = undefined;

var _fableCore = require("fable-core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var t = exports.t = new GameState("LevelScreen", []);

_fableCore.String.fsFormat("%A")(function (x) {
  console.log(x);
})(t);