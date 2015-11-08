/// <reference path="../../framework/signum.react/typings/react-router/react-router.d.ts" />
/// <reference path="../../framework/signum.react/typings/react/react.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'react-router'], function (require, exports, React, react_router_1) {
    var View = (function (_super) {
        __extends(View, _super);
        function View() {
            _super.apply(this, arguments);
        }
        View.prototype.render = function () {
            return (React.createElement("div", null, "Viewing: ", React.createElement(react_router_1.RouteHandler, null)));
        };
        return View;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = View;
});
//# sourceMappingURL=View.js.map