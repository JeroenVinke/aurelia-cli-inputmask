define('app',["require", "exports", "jquery.inputmask"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQUMzQixDQUFDO1FBQUQsVUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ2pxdWVyeS5pbnB1dG1hc2snOyBcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .globalResources([
            'resources/attributes/inputmask'
        ]);
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixlQUFlLENBQUM7WUFDZixnQ0FBZ0M7U0FDakMsQ0FBQyxDQUFDO1FBRUwsRUFBRSxDQUFDLENBQUMscUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFqQkQsOEJBaUJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJylcbiAgICAuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICAgICdyZXNvdXJjZXMvYXR0cmlidXRlcy9pbnB1dG1hc2snXG4gICAgXSk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/attributes/inputmask',["require", "exports", "aurelia-framework", "jquery", "inputmask"], function (require, exports, aurelia_framework_1, $, t) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(t);
    var InputMaskCustomAttribute = (function () {
        function InputMaskCustomAttribute(element) {
            this.element = element;
            this.$e = $(this.element);
        }
        InputMaskCustomAttribute.prototype.attached = function () {
            var _this = this;
            console.log(window.Inputmask.format('123', 'currency'));
            this.$e.on("focusout", function (e) {
                if (_this.$e.inputmask("isComplete")) {
                    var event_1 = document.createEvent('Event');
                    event_1.initEvent('input', true, true);
                    e.target.dispatchEvent(event_1);
                }
            });
            this.$e.inputmask(this.value);
        };
        InputMaskCustomAttribute.prototype.detached = function () {
            this.$e.off("focusout");
            this.$e.inputmask("remove");
        };
        return InputMaskCustomAttribute;
    }());
    InputMaskCustomAttribute = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], InputMaskCustomAttribute);
    exports.InputMaskCustomAttribute = InputMaskCustomAttribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdHRyaWJ1dGVzL2lucHV0bWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR2YsSUFBYSx3QkFBd0I7UUFLcEMsa0NBQW9CLE9BQWU7WUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBRWxDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQsMkNBQVEsR0FBUjtZQUFBLGlCQWFDO1lBWEUsT0FBTyxDQUFDLEdBQUcsQ0FBTyxNQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFLO2dCQUU1QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUNwQyxDQUFDO29CQUNBLElBQUksT0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFDLE9BQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsMkNBQVEsR0FBUjtZQUVDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRiwrQkFBQztJQUFELENBOUJBLEFBOEJDLElBQUE7SUE5Qlksd0JBQXdCO1FBRHBDLDhCQUFVO3lDQU1rQixPQUFPO09BTHZCLHdCQUF3QixDQThCcEM7SUE5QlksNERBQXdCIiwiZmlsZSI6InJlc291cmNlcy9hdHRyaWJ1dGVzL2lucHV0bWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7IFxyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjsgXHJcbmltcG9ydCAqIGFzIHQgZnJvbSAnaW5wdXRtYXNrJzsgXHJcbmNvbnNvbGUubG9nKHQpO1xyXG5cclxuQGF1dG9pbmplY3QgXHJcbmV4cG9ydCBjbGFzcyBJbnB1dE1hc2tDdXN0b21BdHRyaWJ1dGVcclxue1xyXG5cdHB1YmxpYyB2YWx1ZTpzdHJpbmc7IFxyXG5cdHByaXZhdGUgJGU6JDsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KVxyXG5cdHtcclxuXHRcdHRoaXMuJGUgPSAkKHRoaXMuZWxlbWVudCk7IFxyXG5cdH1cclxuXHJcblx0YXR0YWNoZWQoKVxyXG5cdHtcclxuICAgIGNvbnNvbGUubG9nKCg8YW55PndpbmRvdykuSW5wdXRtYXNrLmZvcm1hdCgnMTIzJywgJ2N1cnJlbmN5JyApKTtcclxuXHRcdHRoaXMuJGUub24oXCJmb2N1c291dFwiLCAoZTphbnkgKSA9PiBcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuJGUuaW5wdXRtYXNrKFwiaXNDb21wbGV0ZVwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpOyBcclxuXHRcdFx0XHRldmVudC5pbml0RXZlbnQoJ2lucHV0JywgdHJ1ZSwgdHJ1ZSk7IFxyXG5cdFx0XHRcdGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpOyBcclxuXHRcdFx0fVxyXG5cdFx0fSk7IFxyXG5cdFx0dGhpcy4kZS5pbnB1dG1hc2sodGhpcy52YWx1ZSk7IFxyXG5cdH1cclxuXHJcblx0ZGV0YWNoZWQoKVxyXG5cdHtcclxuXHRcdHRoaXMuJGUub2ZmKFwiZm9jdXNvdXRcIik7IFxyXG5cdFx0dGhpcy4kZS5pbnB1dG1hc2soXCJyZW1vdmVcIik7IFxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1 input-mask>${message}</h1>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map