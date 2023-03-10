function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
export function enumTool(origin) {
  var store;
  var options;

  // 根据 value 获取 key
  var valToKey = function valToKey(value) {
    if (!store) {
      store = Object.entries(origin).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        acc[key] = value;
        acc[value] = key;
        return acc;
      }, {});
    }
    return store[value];
  };

  // 根据 key 获取 value
  var keyToVal = function keyToVal(key) {
    return origin[key];
  };

  /* 生成 Select 组件的 options
   * names 为生成options数组中代表 label 和 value 的名称，默认为 ['label', 'value']
   * 如 genOptions(['name', 'id']) => 生成 [{ name: 'A', id: 'a' }, { name: 'B', id: 'b' }, { name: 'C', id: 'c' }]
   */
  var genOptions = function genOptions(names) {
    var _ref3 = names !== null && names !== void 0 ? names : ['label', 'value'],
      _ref4 = _slicedToArray(_ref3, 2),
      labelName = _ref4[0],
      valueName = _ref4[1];
    if (!options) {
      options = Object.entries(origin).map(function (_ref5) {
        var _ref7;
        var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];
        return _ref7 = {}, _defineProperty(_ref7, labelName, key), _defineProperty(_ref7, valueName, value), _ref7;
      });
    }
    return options;
  };
  return {
    // 获取原始对象
    origin: origin,
    keyToVal: keyToVal,
    valToKey: valToKey,
    genOptions: genOptions
  };
}