/// <reference path="../../framework/signum.react/typings/react/react.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    var NotFound = (function (_super) {
        __extends(NotFound, _super);
        function NotFound() {
            _super.apply(this, arguments);
        }
        NotFound.prototype.render = function () {
            return (React.createElement("div", null, "Not Found JUHU"));
        };
        return NotFound;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NotFound;
});
//# sourceMappingURL=NotFound.js.map