require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8649:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ GithubActionIO)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(7733);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nccwpck_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(3667);
/* harmony import */ var _lib_core_result_js__WEBPACK_IMPORTED_MODULE_2__ = __nccwpck_require__(6692);



class GithubActionIO {
    get(key) {
        return (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)(key);
    }
    getObject(key, validator) {
        const raw = this.get(key);
        return (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_1__/* .parseJSON */ .Rx)(raw).andThen((j) => validator.asResult({
            none: () => (0,_lib_core_result_js__WEBPACK_IMPORTED_MODULE_2__.Ok)(j),
            some: (v) => v.parse(j),
        }));
    }
    set(key, value) {
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setOutput)(key, value);
    }
    setObject(key, value) {
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setOutput)(key, JSON.stringify(value));
    }
    /* istanbul ignore next */
    setFail(err) {
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(err);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLWFjdGlvbi1pLW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXh0ZXJuYWwvZ2l0aHViLWFjdGlvbi1pLW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsRUFBRSxFQUFVLE1BQU0sdUJBQXVCLENBQUM7QUFHbkQsTUFBTSxjQUFjO0lBQ2xCLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBSSxHQUFXLEVBQUUsU0FBK0I7UUFDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNsQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ2pCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFxQjtZQUNyQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDbEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDBCQUEwQjtJQUMxQixPQUFPLENBQUMsR0FBbUI7UUFDekIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbklPIH0gZnJvbSBcIi4uL2xpYi9pbnRlcmZhY2UvaW8uanNcIjtcbmltcG9ydCB7IGdldElucHV0LCBzZXRGYWlsZWQsIHNldE91dHB1dCB9IGZyb20gXCJAYWN0aW9ucy9jb3JlXCI7XG5pbXBvcnQgeyBwYXJzZUpTT04gfSBmcm9tIFwiLi4vbGliL3V0aWwuanNcIjtcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuLi9saWIvaW50ZXJmYWNlL3ZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IHsgT2ssIFJlc3VsdCB9IGZyb20gXCIuLi9saWIvY29yZS9yZXN1bHQuanNcIjtcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gXCIuLi9saWIvY29yZS9vcHRpb24uanNcIjtcblxuY2xhc3MgR2l0aHViQWN0aW9uSU8gaW1wbGVtZW50cyBBY3Rpb25JTyB7XG4gIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldElucHV0KGtleSk7XG4gIH1cblxuICBnZXRPYmplY3Q8VD4oa2V5OiBzdHJpbmcsIHZhbGlkYXRvcjogT3B0aW9uPFZhbGlkYXRvcjxUPj4pOiBSZXN1bHQ8VCwgRXJyb3I+IHtcbiAgICBjb25zdCByYXcgPSB0aGlzLmdldChrZXkpO1xuICAgIHJldHVybiBwYXJzZUpTT04ocmF3KS5hbmRUaGVuKChqKSA9PlxuICAgICAgdmFsaWRhdG9yLmFzUmVzdWx0KHtcbiAgICAgICAgbm9uZTogKCkgPT4gT2soaikgYXMgUmVzdWx0PFQsIEVycm9yPixcbiAgICAgICAgc29tZTogKHYpID0+IHYucGFyc2UoaiksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBzZXRPdXRwdXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBvYmplY3QpOiB2b2lkIHtcbiAgICBzZXRPdXRwdXQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgc2V0RmFpbChlcnI6IHN0cmluZyB8IEVycm9yKTogdm9pZCB7XG4gICAgc2V0RmFpbGVkKGVycik7XG4gIH1cbn1cblxuZXhwb3J0IHsgR2l0aHViQWN0aW9uSU8gfTtcbiJdfQ==

/***/ }),

/***/ 1076:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ GithubActionLogger)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(7733);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nccwpck_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);

class GithubActionLogger {
    debug(message) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.debug(message);
    }
    error(message) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.error(message);
    }
    info(message) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(message);
    }
    notice(message) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.notice(message);
    }
    warning(message) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.warning(message);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLWFjdGlvbi1sb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXh0ZXJuYWwvZ2l0aHViLWFjdGlvbi1sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxlQUFlLENBQUM7QUFHdEMsTUFBTSxrQkFBa0I7SUFDdEIsS0FBSyxDQUFDLE9BQWU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXVCO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUF1QjtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiQGFjdGlvbnMvY29yZVwiO1xuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi9saWIvaW50ZXJmYWNlL2xvZ2dlci5qc1wiO1xuXG5jbGFzcyBHaXRodWJBY3Rpb25Mb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcbiAgZGVidWcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29yZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvcmUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvcmUuaW5mbyhtZXNzYWdlKTtcbiAgfVxuXG4gIG5vdGljZShtZXNzYWdlOiBzdHJpbmcgfCBFcnJvcik6IHZvaWQge1xuICAgIGNvcmUubm90aWNlKG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcgfCBFcnJvcik6IHZvaWQge1xuICAgIGNvcmUud2FybmluZyhtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBHaXRodWJBY3Rpb25Mb2dnZXIgfTtcbiJdfQ==

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ IoInputRetriever)
/* harmony export */ });
/* harmony import */ var _core_option_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(1215);

class IoInputRetriever {
    #io;
    #historyEntryValidator;
    #historyValidator;
    constructor(io, historyEntryValidator, historyValidator) {
        this.#io = io;
        this.#historyEntryValidator = historyEntryValidator;
        this.#historyValidator = historyValidator;
    }
    retrieve() {
        const current = this.#io.getObject("current", (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.#historyEntryValidator));
        const history = this.#io.getObject("history", (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.#historyValidator));
        return current.andThen((c) => history.map((h) => ({ current: c, history: h })));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW8taW5wdXQtcmV0cmlldmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hZGFwdGVycy9pby1pbnB1dC1yZXRyaWV2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpDLE1BQU0sZ0JBQWdCO0lBQ1gsR0FBRyxDQUFXO0lBRWQsc0JBQXNCLENBQTBCO0lBRWhELGlCQUFpQixDQUFxQjtJQUUvQyxZQUNFLEVBQVksRUFDWixxQkFBOEMsRUFDOUMsZ0JBQW9DO1FBRXBDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQyxTQUFTLEVBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUNsQyxDQUFDO1FBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2pELENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0UmV0cmlldmVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9pbnB1dC1yZXRyaWV2ZXIuanNcIjtcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuLi9jb3JlL3Jlc3VsdC5qc1wiO1xuaW1wb3J0IHsgQWN0aW9uSW5wdXQsIEhpc3RvcnksIEhpc3RvcnlFbnRyeSB9IGZyb20gXCIuLi9pbnB1dC5qc1wiO1xuaW1wb3J0IHsgQWN0aW9uSU8gfSBmcm9tIFwiLi4vaW50ZXJmYWNlL2lvLmpzXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL3ZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IHsgU29tZSB9IGZyb20gXCIuLi9jb3JlL29wdGlvbi5qc1wiO1xuXG5jbGFzcyBJb0lucHV0UmV0cmlldmVyIGltcGxlbWVudHMgSW5wdXRSZXRyaWV2ZXIge1xuICByZWFkb25seSAjaW86IEFjdGlvbklPO1xuXG4gIHJlYWRvbmx5ICNoaXN0b3J5RW50cnlWYWxpZGF0b3I6IFZhbGlkYXRvcjxIaXN0b3J5RW50cnk+O1xuXG4gIHJlYWRvbmx5ICNoaXN0b3J5VmFsaWRhdG9yOiBWYWxpZGF0b3I8SGlzdG9yeT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW86IEFjdGlvbklPLFxuICAgIGhpc3RvcnlFbnRyeVZhbGlkYXRvcjogVmFsaWRhdG9yPEhpc3RvcnlFbnRyeT4sXG4gICAgaGlzdG9yeVZhbGlkYXRvcjogVmFsaWRhdG9yPEhpc3Rvcnk+XG4gICkge1xuICAgIHRoaXMuI2lvID0gaW87XG4gICAgdGhpcy4jaGlzdG9yeUVudHJ5VmFsaWRhdG9yID0gaGlzdG9yeUVudHJ5VmFsaWRhdG9yO1xuICAgIHRoaXMuI2hpc3RvcnlWYWxpZGF0b3IgPSBoaXN0b3J5VmFsaWRhdG9yO1xuICB9XG5cbiAgcmV0cmlldmUoKTogUmVzdWx0PEFjdGlvbklucHV0LCBFcnJvcj4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLiNpby5nZXRPYmplY3QoXG4gICAgICBcImN1cnJlbnRcIixcbiAgICAgIFNvbWUodGhpcy4jaGlzdG9yeUVudHJ5VmFsaWRhdG9yKVxuICAgICk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuI2lvLmdldE9iamVjdChcImhpc3RvcnlcIiwgU29tZSh0aGlzLiNoaXN0b3J5VmFsaWRhdG9yKSk7XG4gICAgcmV0dXJuIGN1cnJlbnQuYW5kVGhlbigoYykgPT5cbiAgICAgIGhpc3RvcnkubWFwKChoKSA9PiAoeyBjdXJyZW50OiBjLCBoaXN0b3J5OiBoIH0pKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgSW9JbnB1dFJldHJpZXZlciB9O1xuIl19

/***/ }),

/***/ 6357:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ZodValidatorAdapter)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(3667);

class ZodValidatorAdapter {
    validator;
    constructor(validator) {
        this.validator = validator;
    }
    parse(input) {
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__/* .toResult */ .K8)(this.validator.safeParse(input));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9kLXZhbGlkYXRvci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hZGFwdGVycy96b2QtdmFsaWRhdG9yLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUd0QyxNQUFNLG1CQUFtQjtJQUNmLFNBQVMsQ0FBbUI7SUFFcEMsWUFBWSxTQUEyQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7QUFFRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFpvZFR5cGUsIFpvZFR5cGVEZWYgfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL3ZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IHsgdG9SZXN1bHQgfSBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4uL2NvcmUvcmVzdWx0LmpzXCI7XG5cbmNsYXNzIFpvZFZhbGlkYXRvckFkYXB0ZXI8VCwgWCBleHRlbmRzIFpvZFR5cGVEZWY+IGltcGxlbWVudHMgVmFsaWRhdG9yPFQ+IHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFpvZFR5cGU8VCwgWCwgVD47XG5cbiAgY29uc3RydWN0b3IodmFsaWRhdG9yOiBab2RUeXBlPFQsIFgsIFQ+KSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gIH1cblxuICBwYXJzZShpbnB1dDogdW5rbm93bik6IFJlc3VsdDxULCBFcnJvcj4ge1xuICAgIHJldHVybiB0b1Jlc3VsdCh0aGlzLnZhbGlkYXRvci5zYWZlUGFyc2UoaW5wdXQpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBab2RWYWxpZGF0b3JBZGFwdGVyIH07XG4iXX0=

/***/ }),

/***/ 9892:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ CodeQualityReportConverter)
/* harmony export */ });
/* harmony import */ var _core_option_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(1215);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(3667);


class CodeQualityReportConverter {
    convertHeader(header) {
        if (header.data.type === "code-quality") {
            const f = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .emoji */ .rP)(header.data.result);
            const h = `## ${f}  ${header.name}\n`;
            const result = `
        **Quality Rating**: ${header.data.qualityRating}\\
`;
            const policy = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToMarkdown */ .ft)(header.data.resultDetails);
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`
${h}
Report: [Code Quality](${header.url})
${result}
${policy}
`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
    convertTable(table) {
        if (table.data.type === "code-quality") {
            const color = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToColor */ .mu)(table.data.result);
            const d = table.data;
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`[![badge](https://img.shields.io/badge/quality` +
                `-${d.qualityRating}` +
                `-${color})](${table.url})`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1xdWFsaXR5LXJlcG9ydC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbnZlcnRlci9jb2RlLXF1YWxpdHktcmVwb3J0LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsSUFBSSxFQUFVLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBFLE1BQU0sMEJBQTBCO0lBQzlCLGFBQWEsQ0FBQyxNQUFtQjtRQUMvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtZQUN2QyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDdEMsTUFBTSxNQUFNLEdBQUc7OEJBQ1MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhO0NBQ3RELENBQUM7WUFDSSxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO0VBQ2hCLENBQUM7eUJBQ3NCLE1BQU0sQ0FBQyxHQUFHO0VBQ2pDLE1BQU07RUFDTixNQUFNO0NBQ1AsQ0FBQyxDQUFDO1NBQ0U7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBa0I7UUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDdEMsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLElBQUksQ0FDVCxnREFBZ0Q7Z0JBQzlDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRTtnQkFDckIsSUFBSSxLQUFLLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUM5QixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9jb252ZXJ0ZXIuanNcIjtcbmltcG9ydCB7IERhdGFFbGVtZW50IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5pbXBvcnQgeyBOb25lLCBPcHRpb24sIFNvbWUgfSBmcm9tIFwiLi4vY29yZS9vcHRpb24uanNcIjtcbmltcG9ydCB7IGVtb2ppLCByZXN1bHRUb0NvbG9yLCByZXN1bHRUb01hcmtkb3duIH0gZnJvbSBcIi4uL3V0aWwuanNcIjtcblxuY2xhc3MgQ29kZVF1YWxpdHlSZXBvcnRDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXIge1xuICBjb252ZXJ0SGVhZGVyKGhlYWRlcjogRGF0YUVsZW1lbnQpOiBPcHRpb248c3RyaW5nPiB7XG4gICAgaWYgKGhlYWRlci5kYXRhLnR5cGUgPT09IFwiY29kZS1xdWFsaXR5XCIpIHtcbiAgICAgIGNvbnN0IGYgPSBlbW9qaShoZWFkZXIuZGF0YS5yZXN1bHQpO1xuICAgICAgY29uc3QgaCA9IGAjIyAke2Z9ICAke2hlYWRlci5uYW1lfVxcbmA7XG4gICAgICBjb25zdCByZXN1bHQgPSBgXG4gICAgICAgICoqUXVhbGl0eSBSYXRpbmcqKjogJHtoZWFkZXIuZGF0YS5xdWFsaXR5UmF0aW5nfVxcXFxcbmA7XG4gICAgICBjb25zdCBwb2xpY3kgPSByZXN1bHRUb01hcmtkb3duKGhlYWRlci5kYXRhLnJlc3VsdERldGFpbHMpO1xuICAgICAgcmV0dXJuIFNvbWUoYFxuJHtofVxuUmVwb3J0OiBbQ29kZSBRdWFsaXR5XSgke2hlYWRlci51cmx9KVxuJHtyZXN1bHR9XG4ke3BvbGljeX1cbmApO1xuICAgIH1cbiAgICByZXR1cm4gTm9uZSgpO1xuICB9XG5cbiAgY29udmVydFRhYmxlKHRhYmxlOiBEYXRhRWxlbWVudCk6IE9wdGlvbjxzdHJpbmc+IHtcbiAgICBpZiAodGFibGUuZGF0YS50eXBlID09PSBcImNvZGUtcXVhbGl0eVwiKSB7XG4gICAgICBjb25zdCBjb2xvciA9IHJlc3VsdFRvQ29sb3IodGFibGUuZGF0YS5yZXN1bHQpO1xuICAgICAgY29uc3QgZCA9IHRhYmxlLmRhdGE7XG4gICAgICByZXR1cm4gU29tZShcbiAgICAgICAgYFshW2JhZGdlXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL3F1YWxpdHlgICtcbiAgICAgICAgICBgLSR7ZC5xdWFsaXR5UmF0aW5nfWAgK1xuICAgICAgICAgIGAtJHtjb2xvcn0pXSgke3RhYmxlLnVybH0pYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIE5vbmUoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBDb2RlUXVhbGl0eVJlcG9ydENvbnZlcnRlciB9O1xuIl19

/***/ }),

/***/ 9017:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ DocumentationConverter)
/* harmony export */ });
/* harmony import */ var _core_option_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(1215);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(3667);


class DocumentationConverter {
    convertHeader(header) {
        return this.convertTable(header).andThen((badge) => {
            if (header.data.type === "documentation") {
                const f = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .emoji */ .rP)(header.data.result);
                const h = `## ${f}  ${header.name}\n`;
                const policy = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToMarkdown */ .ft)(header.data.resultDetails);
                return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`
${h}
Report: ${badge}
${policy}
`);
            }
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
        });
    }
    convertTable(table) {
        if (table.data.type === "documentation") {
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`[${table.name}](${table.url})`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbnZlcnRlci9kb2N1bWVudGF0aW9uLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFVLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHckQsTUFBTSxzQkFBc0I7SUFDMUIsYUFBYSxDQUFDLE1BQW1CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtnQkFDeEMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFDdEMsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxJQUFJLENBQUM7RUFDbEIsQ0FBQztVQUNPLEtBQUs7RUFDYixNQUFNO0NBQ1AsQ0FBQyxDQUFDO2FBQ0k7WUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFrQjtRQUM3QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUVsZW1lbnQgfSBmcm9tIFwiLi4vaW5wdXQuanNcIjtcbmltcG9ydCB7IE5vbmUsIE9wdGlvbiwgU29tZSB9IGZyb20gXCIuLi9jb3JlL29wdGlvbi5qc1wiO1xuaW1wb3J0IHsgZW1vamksIHJlc3VsdFRvTWFya2Rvd24gfSBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9jb252ZXJ0ZXIuanNcIjtcblxuY2xhc3MgRG9jdW1lbnRhdGlvbkNvbnZlcnRlciBpbXBsZW1lbnRzIENvbnZlcnRlciB7XG4gIGNvbnZlcnRIZWFkZXIoaGVhZGVyOiBEYXRhRWxlbWVudCk6IE9wdGlvbjxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VGFibGUoaGVhZGVyKS5hbmRUaGVuKChiYWRnZSkgPT4ge1xuICAgICAgaWYgKGhlYWRlci5kYXRhLnR5cGUgPT09IFwiZG9jdW1lbnRhdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGYgPSBlbW9qaShoZWFkZXIuZGF0YS5yZXN1bHQpO1xuICAgICAgICBjb25zdCBoID0gYCMjICR7Zn0gICR7aGVhZGVyLm5hbWV9XFxuYDtcbiAgICAgICAgY29uc3QgcG9saWN5ID0gcmVzdWx0VG9NYXJrZG93bihoZWFkZXIuZGF0YS5yZXN1bHREZXRhaWxzKTtcbiAgICAgICAgcmV0dXJuIFNvbWUoYFxuJHtofVxuUmVwb3J0OiAke2JhZGdlfVxuJHtwb2xpY3l9XG5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBOb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb252ZXJ0VGFibGUodGFibGU6IERhdGFFbGVtZW50KTogT3B0aW9uPHN0cmluZz4ge1xuICAgIGlmICh0YWJsZS5kYXRhLnR5cGUgPT09IFwiZG9jdW1lbnRhdGlvblwiKSB7XG4gICAgICByZXR1cm4gU29tZShgWyR7dGFibGUubmFtZX1dKCR7dGFibGUudXJsfSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIE5vbmUoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBEb2N1bWVudGF0aW9uQ29udmVydGVyIH07XG4iXX0=

/***/ }),

/***/ 2112:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ TestCoverageConverter)
/* harmony export */ });
/* harmony import */ var _core_option_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(1215);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(3667);


class TestCoverageConverter {
    convertHeader(header) {
        if (header.data.type === "test-coverage") {
            const f = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .emoji */ .rP)(header.data.result);
            const h = `## ${f}  ${header.name}\n`;
            const coverage = `
| Type | Coverage |
| ---- | -------- |
| Line | ${header.data.line.toFixed(2)}% |
| Statement | ${header.data.statement.toFixed(2)}% |
| Function | ${header.data.function.toFixed(2)}% |
| Branch | ${header.data.branch.toFixed(2)}% |
`;
            const diff = header.data.delta;
            const dEmoji = (d) => (d > 0 ? "⏫" : "⏬");
            const delta = diff == null
                ? coverage
                : `
| Type | Coverage | Delta |
| ---- | -------- | ----- |
| Line | ${header.data.line.toFixed(2)}% | ${diff.line.toFixed(2)}% ${dEmoji(diff.line)} |
| Statement | ${header.data.statement.toFixed(2)}% | ${diff.statement.toFixed(2)}% ${dEmoji(diff.statement)} |
| Function | ${header.data.function.toFixed(2)}% | ${diff.function.toFixed(2)}% ${dEmoji(diff.function)} |
| Branch | ${header.data.branch.toFixed(2)}% | ${diff.branch.toFixed(2)}% ${dEmoji(diff.branch)} |
`;
            const policy = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToMarkdown */ .ft)(header.data.resultDetails);
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`
${h}
Report: [Coverage](${header.url})
${delta}
${policy}
`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
    convertTable(table) {
        if (table.data.type === "test-coverage") {
            const color = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToColor */ .mu)(table.data.result);
            const d = table.data;
            // ☲ 100% | ∬ 90.2% | 🜉 25.5%
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`[![badge](https://img.shields.io/badge/coverage` +
                `-%E2%98%B2%20${d.statement.toFixed(1)}%25%20%7C%20%E2%88%AC%20${d.function.toFixed(1)}%25%20%7C%20%F0%9F%9C%89%20${d.branch.toFixed(1)}%25` +
                `-${color})](${table.url})`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb3ZlcmFnZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbnZlcnRlci90ZXN0LWNvdmVyYWdlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFVLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3BFLE1BQU0scUJBQXFCO0lBQ3pCLGFBQWEsQ0FBQyxNQUFtQjtRQUMvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsRUFBRTtZQUN4QyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDdEMsTUFBTSxRQUFRLEdBQUc7OztXQUdaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7ZUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ3pDLENBQUM7WUFDSSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sS0FBSyxHQUNULElBQUksSUFBSSxJQUFJO2dCQUNWLENBQUMsQ0FBQyxRQUFRO2dCQUNWLENBQUMsQ0FBQzs7O1dBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FDOUQsSUFBSSxDQUFDLElBQUksQ0FDVjtnQkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQy9ELENBQUMsQ0FDRixLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2VBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDNUQsQ0FBQyxDQUNGLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0RCxDQUFDLENBQ0YsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztDQUNwQyxDQUFDO1lBRUksTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztFQUNoQixDQUFDO3FCQUNrQixNQUFNLENBQUMsR0FBRztFQUM3QixLQUFLO0VBQ0wsTUFBTTtDQUNQLENBQUMsQ0FBQztTQUNFO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWtCO1FBQzdCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxFQUFFO1lBQ3ZDLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDckIsOEJBQThCO1lBQzlCLE9BQU8sSUFBSSxDQUNULGlEQUFpRDtnQkFDL0MsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUNqQyxDQUFDLENBQ0YsMkJBQTJCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUM1QyxDQUFDLENBQ0YsOEJBQThCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO2dCQUN2RCxJQUFJLEtBQUssTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQzlCLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBRUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhRWxlbWVudCB9IGZyb20gXCIuLi9pbnB1dC5qc1wiO1xuaW1wb3J0IHsgTm9uZSwgT3B0aW9uLCBTb21lIH0gZnJvbSBcIi4uL2NvcmUvb3B0aW9uLmpzXCI7XG5pbXBvcnQgeyBlbW9qaSwgcmVzdWx0VG9Db2xvciwgcmVzdWx0VG9NYXJrZG93biB9IGZyb20gXCIuLi91dGlsLmpzXCI7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL2NvbnZlcnRlci5qc1wiO1xuXG5jbGFzcyBUZXN0Q292ZXJhZ2VDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXIge1xuICBjb252ZXJ0SGVhZGVyKGhlYWRlcjogRGF0YUVsZW1lbnQpOiBPcHRpb248c3RyaW5nPiB7XG4gICAgaWYgKGhlYWRlci5kYXRhLnR5cGUgPT09IFwidGVzdC1jb3ZlcmFnZVwiKSB7XG4gICAgICBjb25zdCBmID0gZW1vamkoaGVhZGVyLmRhdGEucmVzdWx0KTtcbiAgICAgIGNvbnN0IGggPSBgIyMgJHtmfSAgJHtoZWFkZXIubmFtZX1cXG5gO1xuICAgICAgY29uc3QgY292ZXJhZ2UgPSBgXG58IFR5cGUgfCBDb3ZlcmFnZSB8XG58IC0tLS0gfCAtLS0tLS0tLSB8XG58IExpbmUgfCAke2hlYWRlci5kYXRhLmxpbmUudG9GaXhlZCgyKX0lIHxcbnwgU3RhdGVtZW50IHwgJHtoZWFkZXIuZGF0YS5zdGF0ZW1lbnQudG9GaXhlZCgyKX0lIHxcbnwgRnVuY3Rpb24gfCAke2hlYWRlci5kYXRhLmZ1bmN0aW9uLnRvRml4ZWQoMil9JSB8XG58IEJyYW5jaCB8ICR7aGVhZGVyLmRhdGEuYnJhbmNoLnRvRml4ZWQoMil9JSB8XG5gO1xuICAgICAgY29uc3QgZGlmZiA9IGhlYWRlci5kYXRhLmRlbHRhO1xuICAgICAgY29uc3QgZEVtb2ppID0gKGQ6IG51bWJlcikgPT4gKGQgPiAwID8gXCLij6tcIiA6IFwi4o+sXCIpO1xuICAgICAgY29uc3QgZGVsdGEgPVxuICAgICAgICBkaWZmID09IG51bGxcbiAgICAgICAgICA/IGNvdmVyYWdlXG4gICAgICAgICAgOiBgXG58IFR5cGUgfCBDb3ZlcmFnZSB8IERlbHRhIHxcbnwgLS0tLSB8IC0tLS0tLS0tIHwgLS0tLS0gfFxufCBMaW5lIHwgJHtoZWFkZXIuZGF0YS5saW5lLnRvRml4ZWQoMil9JSB8ICR7ZGlmZi5saW5lLnRvRml4ZWQoMil9JSAke2RFbW9qaShcbiAgICAgICAgICAgICAgZGlmZi5saW5lXG4gICAgICAgICAgICApfSB8XG58IFN0YXRlbWVudCB8ICR7aGVhZGVyLmRhdGEuc3RhdGVtZW50LnRvRml4ZWQoMil9JSB8ICR7ZGlmZi5zdGF0ZW1lbnQudG9GaXhlZChcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKX0lICR7ZEVtb2ppKGRpZmYuc3RhdGVtZW50KX0gfFxufCBGdW5jdGlvbiB8ICR7aGVhZGVyLmRhdGEuZnVuY3Rpb24udG9GaXhlZCgyKX0lIHwgJHtkaWZmLmZ1bmN0aW9uLnRvRml4ZWQoXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICl9JSAke2RFbW9qaShkaWZmLmZ1bmN0aW9uKX0gfFxufCBCcmFuY2ggfCAke2hlYWRlci5kYXRhLmJyYW5jaC50b0ZpeGVkKDIpfSUgfCAke2RpZmYuYnJhbmNoLnRvRml4ZWQoXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICl9JSAke2RFbW9qaShkaWZmLmJyYW5jaCl9IHxcbmA7XG5cbiAgICAgIGNvbnN0IHBvbGljeSA9IHJlc3VsdFRvTWFya2Rvd24oaGVhZGVyLmRhdGEucmVzdWx0RGV0YWlscyk7XG4gICAgICByZXR1cm4gU29tZShgXG4ke2h9XG5SZXBvcnQ6IFtDb3ZlcmFnZV0oJHtoZWFkZXIudXJsfSlcbiR7ZGVsdGF9XG4ke3BvbGljeX1cbmApO1xuICAgIH1cbiAgICByZXR1cm4gTm9uZSgpO1xuICB9XG5cbiAgY29udmVydFRhYmxlKHRhYmxlOiBEYXRhRWxlbWVudCk6IE9wdGlvbjxzdHJpbmc+IHtcbiAgICBpZiAodGFibGUuZGF0YS50eXBlID09PSBcInRlc3QtY292ZXJhZ2VcIikge1xuICAgICAgY29uc3QgY29sb3IgPSByZXN1bHRUb0NvbG9yKHRhYmxlLmRhdGEucmVzdWx0KTtcbiAgICAgIGNvbnN0IGQgPSB0YWJsZS5kYXRhO1xuICAgICAgLy8g4piyIDEwMCUgfCDiiKwgOTAuMiUgfCDwn5yJIDI1LjUlXG4gICAgICByZXR1cm4gU29tZShcbiAgICAgICAgYFshW2JhZGdlXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL2NvdmVyYWdlYCArXG4gICAgICAgICAgYC0lRTIlOTglQjIlMjAke2Quc3RhdGVtZW50LnRvRml4ZWQoXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKX0lMjUlMjAlN0MlMjAlRTIlODglQUMlMjAke2QuZnVuY3Rpb24udG9GaXhlZChcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApfSUyNSUyMCU3QyUyMCVGMCU5RiU5QyU4OSUyMCR7ZC5icmFuY2gudG9GaXhlZCgxKX0lMjVgICtcbiAgICAgICAgICBgLSR7Y29sb3J9KV0oJHt0YWJsZS51cmx9KWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBOb25lKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgVGVzdENvdmVyYWdlQ29udmVydGVyIH07XG4iXX0=

/***/ }),

/***/ 3238:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ TestResultConverter)
/* harmony export */ });
/* harmony import */ var _core_option_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(1215);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(3667);


class TestResultConverter {
    convertHeader(header) {
        if (header.data.type === "test-result") {
            const f = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .emoji */ .rP)(header.data.result);
            const h = `## ${f}  ${header.name}\n`;
            const result = `
| Tests | Amount |
| ---- | -------- |
| Pass | ${header.data.pass} |
| Fail | ${header.data.fail} |
| Skip | ${header.data.skip} |
`;
            const policy = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToMarkdown */ .ft)(header.data.resultDetails);
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`
${h}
Report: [Test Results](${header.url})
${result}
${policy}
`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
    convertTable(table) {
        if (table.data.type === "test-result") {
            const color = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .resultToColor */ .mu)(table.data.result);
            const d = table.data;
            // ✔ HELLO | ✘ HELLO | ➟ HELLO
            return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(`[![badge](https://img.shields.io/badge/test` +
                `-%E2%9C%94%20${d.pass}%20%7C%20%E2%9C%98%20${d.fail}%20%7C%20%E2%9E%9F%20${d.skip}` +
                `-${color})](${table.url})`);
        }
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq)();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZXN1bHQtY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb252ZXJ0ZXIvdGVzdC1yZXN1bHQtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQVUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHcEUsTUFBTSxtQkFBbUI7SUFDdkIsYUFBYSxDQUFDLE1BQW1CO1FBQy9CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztZQUN0QyxNQUFNLE1BQU0sR0FBRzs7O1dBR1YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1dBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtXQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Q0FDMUIsQ0FBQztZQUNJLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7RUFDaEIsQ0FBQzt5QkFDc0IsTUFBTSxDQUFDLEdBQUc7RUFDakMsTUFBTTtFQUNOLE1BQU07Q0FDUCxDQUFDLENBQUM7U0FDRTtRQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFrQjtRQUM3QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtZQUNyQyxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3JCLDhCQUE4QjtZQUM5QixPQUFPLElBQUksQ0FDVCw2Q0FBNkM7Z0JBQzNDLGdCQUFnQixDQUFDLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDLElBQUksd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BGLElBQUksS0FBSyxNQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FDOUIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFFbGVtZW50IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5pbXBvcnQgeyBOb25lLCBPcHRpb24sIFNvbWUgfSBmcm9tIFwiLi4vY29yZS9vcHRpb24uanNcIjtcbmltcG9ydCB7IGVtb2ppLCByZXN1bHRUb0NvbG9yLCByZXN1bHRUb01hcmtkb3duIH0gZnJvbSBcIi4uL3V0aWwuanNcIjtcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2UvY29udmVydGVyLmpzXCI7XG5cbmNsYXNzIFRlc3RSZXN1bHRDb252ZXJ0ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXIge1xuICBjb252ZXJ0SGVhZGVyKGhlYWRlcjogRGF0YUVsZW1lbnQpOiBPcHRpb248c3RyaW5nPiB7XG4gICAgaWYgKGhlYWRlci5kYXRhLnR5cGUgPT09IFwidGVzdC1yZXN1bHRcIikge1xuICAgICAgY29uc3QgZiA9IGVtb2ppKGhlYWRlci5kYXRhLnJlc3VsdCk7XG4gICAgICBjb25zdCBoID0gYCMjICR7Zn0gICR7aGVhZGVyLm5hbWV9XFxuYDtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGBcbnwgVGVzdHMgfCBBbW91bnQgfFxufCAtLS0tIHwgLS0tLS0tLS0gfFxufCBQYXNzIHwgJHtoZWFkZXIuZGF0YS5wYXNzfSB8XG58IEZhaWwgfCAke2hlYWRlci5kYXRhLmZhaWx9IHxcbnwgU2tpcCB8ICR7aGVhZGVyLmRhdGEuc2tpcH0gfFxuYDtcbiAgICAgIGNvbnN0IHBvbGljeSA9IHJlc3VsdFRvTWFya2Rvd24oaGVhZGVyLmRhdGEucmVzdWx0RGV0YWlscyk7XG4gICAgICByZXR1cm4gU29tZShgXG4ke2h9XG5SZXBvcnQ6IFtUZXN0IFJlc3VsdHNdKCR7aGVhZGVyLnVybH0pXG4ke3Jlc3VsdH1cbiR7cG9saWN5fVxuYCk7XG4gICAgfVxuICAgIHJldHVybiBOb25lKCk7XG4gIH1cblxuICBjb252ZXJ0VGFibGUodGFibGU6IERhdGFFbGVtZW50KTogT3B0aW9uPHN0cmluZz4ge1xuICAgIGlmICh0YWJsZS5kYXRhLnR5cGUgPT09IFwidGVzdC1yZXN1bHRcIikge1xuICAgICAgY29uc3QgY29sb3IgPSByZXN1bHRUb0NvbG9yKHRhYmxlLmRhdGEucmVzdWx0KTtcbiAgICAgIGNvbnN0IGQgPSB0YWJsZS5kYXRhO1xuICAgICAgLy8g4pyUIEhFTExPIHwg4pyYIEhFTExPIHwg4p6fIEhFTExPXG4gICAgICByZXR1cm4gU29tZShcbiAgICAgICAgYFshW2JhZGdlXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL3Rlc3RgICtcbiAgICAgICAgICBgLSVFMiU5QyU5NCUyMCR7ZC5wYXNzfSUyMCU3QyUyMCVFMiU5QyU5OCUyMCR7ZC5mYWlsfSUyMCU3QyUyMCVFMiU5RSU5RiUyMCR7ZC5za2lwfWAgK1xuICAgICAgICAgIGAtJHtjb2xvcn0pXSgke3RhYmxlLnVybH0pYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIE5vbmUoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBUZXN0UmVzdWx0Q29udmVydGVyIH07XG4iXX0=

/***/ }),

/***/ 2207:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ UnwrapError)
/* harmony export */ });
class UnwrapError extends Error {
    type;
    monadType;
    constructor(message, monadType, type) {
        super(message);
        this.type = type;
        this.monadType = monadType;
        this.name = "UnwrapError";
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxXQUFZLFNBQVEsS0FBSztJQUM3QixJQUFJLENBR3lCO0lBQzdCLFNBQVMsQ0FBc0I7SUFFL0IsWUFDRSxPQUFlLEVBQ2YsU0FBOEIsRUFDOUIsSUFHNEI7UUFFNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBRUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVW53cmFwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHR5cGU6XG4gICAgfCBcIkV4cGVjdGVkIE9rIGdvdCBFcnJvclwiXG4gICAgfCBcIkV4cGVjdGVkIEVyciBnb3QgT2tcIlxuICAgIHwgXCJFeHBlY3RlZCBTb21lIGdvdCBOb25lXCI7XG4gIG1vbmFkVHlwZTogXCJyZXN1bHRcIiB8IFwib3B0aW9uXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIG1vbmFkVHlwZTogXCJyZXN1bHRcIiB8IFwib3B0aW9uXCIsXG4gICAgdHlwZTpcbiAgICAgIHwgXCJFeHBlY3RlZCBPayBnb3QgRXJyb3JcIlxuICAgICAgfCBcIkV4cGVjdGVkIEVyciBnb3QgT2tcIlxuICAgICAgfCBcIkV4cGVjdGVkIFNvbWUgZ290IE5vbmVcIlxuICApIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubW9uYWRUeXBlID0gbW9uYWRUeXBlO1xuICAgIHRoaXMubmFtZSA9IFwiVW53cmFwRXJyb3JcIjtcbiAgfVxufVxuXG5leHBvcnQgeyBVbndyYXBFcnJvciB9O1xuIl19

/***/ }),

/***/ 1215:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "Hq": () => (/* binding */ None),
/* harmony export */   "bD": () => (/* binding */ Some),
/* harmony export */   "mD": () => (/* binding */ KOption)
/* harmony export */ });
/* unused harmony export Opt */
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(6692);
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(2207);


class Opt {
    // takes in a list of options and returns a new option with a list of some values if all the results are some, and none if any are none
    /**
     * @template T
     * @param i - list of options
     */
    static all(...i) {
        const closure = async () => {
            const some = [];
            let none = 0;
            const r = i.map(async (e) => {
                const isSome = await e.isSome();
                if (isSome) {
                    const ok = await e.unwrap();
                    return ["some", ok];
                }
                else {
                    return ["none", null];
                }
            });
            const a = await Promise.all(r);
            for (const [t, v] of a) {
                if (t === "some") {
                    some.push(v);
                }
                else {
                    none++;
                }
            }
            if (none > 0) {
                return None();
            }
            return Some(some);
        };
        return Opt.fromAsync(closure());
    }
    // Resolve the promise of an option, Promise<Option<T>> to Option<T> without async/await
    /**
     * @template T
     * @param p - promise of an option to resolve
     * @returns {Option<T>} resolved option
     */
    static fromAsync(p) {
        return new KOption((async () => {
            const r = await p;
            const isSome = await r.isSome();
            if (isSome) {
                const ok = await r.unwrap();
                return Promise.resolve(["some", ok]);
            }
            return Promise.resolve(["none", null]);
        })());
    }
    // Create an Option from an async function
    /**
     * @template T
     * @param fn - async function that returns an option
     * @returns {Option<T>} option from the async function
     */
    static async(fn) {
        return Opt.fromAsync(fn());
    }
}
class KOption {
    value;
    constructor(value) {
        this.value = Promise.resolve(value);
    }
    async native() {
        const [, v] = await this.value;
        return v;
    }
    andThen(fn) {
        return new KOption((async () => {
            const [type, value] = await this.value;
            if (type === "none") {
                return [type, value];
            }
            else {
                const mapped = await fn(value);
                const isSome = await mapped.isSome();
                if (isSome) {
                    const v = await mapped.unwrap();
                    return ["some", v];
                }
                else {
                    return ["none", null];
                }
            }
        })());
    }
    asErr(ok) {
        return new _result_js__WEBPACK_IMPORTED_MODULE_0__/* .KResult */ .Wc((async () => {
            const [t, v] = await this.value;
            if (t === "none") {
                const s = await ok;
                return ["ok", s];
            }
            else {
                return ["err", v];
            }
        })());
    }
    asOk(err) {
        return new _result_js__WEBPACK_IMPORTED_MODULE_0__/* .KResult */ .Wc((async () => {
            const [t, v] = await this.value;
            if (t === "none") {
                const s = await err;
                return ["err", s];
            }
            else {
                return ["ok", v];
            }
        })());
    }
    asResult(fn) {
        return new _result_js__WEBPACK_IMPORTED_MODULE_0__/* .KResult */ .Wc(Promise.resolve(["ok", 0])).andThen(async () => {
            const [t, v] = await this.value;
            return await (async () => {
                if (t === "none") {
                    if (typeof fn.none === "function") {
                        const f = fn.none;
                        return Promise.resolve(f());
                    }
                    else {
                        return Promise.resolve(fn.none);
                    }
                }
                else {
                    return fn.some(v);
                }
            })();
        });
    }
    async isNone() {
        const [t] = await this.value;
        return t === "none";
    }
    async isSome() {
        const [t] = await this.value;
        return t === "some";
    }
    map(fn) {
        return new KOption((async () => {
            const [t, v] = await this.value;
            if (t === "none") {
                return [t, v];
            }
            else {
                const fv = await fn(v);
                return [t, fv];
            }
        })());
    }
    async match(fn) {
        const [t, v] = await this.value;
        if (t === "some") {
            return Promise.resolve(fn.some(v));
        }
        else {
            if (typeof fn.none === "function") {
                const f = fn.none;
                return Promise.resolve(f());
            }
            else {
                return Promise.resolve(fn.none);
            }
        }
    }
    run(sideEffect) {
        return new KOption((async () => {
            const [t, v] = await this.value;
            if (t === "none") {
                return [t, v];
            }
            else {
                await sideEffect(v);
                return [t, v];
            }
        })());
    }
    async unwrap() {
        const [t, v] = await this.value;
        if (t === "some") {
            return v;
        }
        else {
            throw new _error_js__WEBPACK_IMPORTED_MODULE_1__/* .UnwrapError */ .e("Failed to unwrap", "option", "Expected Some got None");
        }
    }
    async unwrapOr(def) {
        const [t, v] = await this.value;
        if (t === "some") {
            return v;
        }
        else {
            if (typeof def === "function") {
                const f = def;
                return Promise.resolve(f());
            }
            else {
                return def;
            }
        }
    }
}
function Some(v) {
    return new KOption(Promise.resolve(["some", v]));
}
function None() {
    return new KOption(Promise.resolve(["none", null]));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL29wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFVLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUEwQnpDLE1BQU0sR0FBRztJQUNQLHVJQUF1STtJQUN2STs7O09BR0c7SUFDSCxNQUFNLENBQUMsR0FBRyxDQUE4QixHQUFHLENBQVM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsS0FBSyxJQUFvQyxFQUFFO1lBQ3pELE1BQU0sSUFBSSxHQUFrQixFQUFtQixDQUFDO1lBQ2hELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3ZCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssTUFBTSxFQUFFO29CQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNkO3FCQUFNO29CQUNM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QUFNLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFBTTtZQUNMLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUM3QixNQUFNLENBQUMsR0FBRyxHQUFxQyxDQUFDO2dCQUNoRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsQ0FBQzthQUNaO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxTQUFTLElBQUksQ0FBSSxDQUFJO0lBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELFNBQVMsSUFBSTtJQUNYLE9BQU8sSUFBSSxPQUFPLENBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELE9BQU8sRUFBVSxPQUFPLEVBQXNCLElBQUksRUFBRSxJQUFJLEVBQWdCLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS1Jlc3VsdCwgUmVzdWx0IH0gZnJvbSBcIi4vcmVzdWx0LmpzXCI7XG5pbXBvcnQgeyBVbndyYXBFcnJvciB9IGZyb20gXCIuL2Vycm9yLmpzXCI7XG5cbmludGVyZmFjZSBNYXRjaDxULCBVPiB7XG4gIC8vIE1hcCB0aGUgU29tZSB2YWx1ZSB0byBhIHN0YW5kYXJkIHR5cGVcbiAgc29tZTogKCh2YWw6IFQpID0+IFUpIHwgKCh2YWw6IFQpID0+IFByb21pc2U8VT4pO1xuICAvLyBNYXAgdGhlIE5vbmUgdmFsdWUgdG8gYSBzdGFuZGFyZCB0eXBlXG4gIG5vbmU6ICgoKSA9PiBVKSB8ICgoKSA9PiBQcm9taXNlPFU+KSB8IFUgfCBQcm9taXNlPFU+O1xufVxuXG5pbnRlcmZhY2UgUmVzdWx0TWF0Y2g8VCwgVSwgRT4ge1xuICBzb21lOiAoKHZhbDogVCkgPT4gUmVzdWx0PFUsIEU+KSB8ICgodmFsOiBUKSA9PiBQcm9taXNlPFJlc3VsdDxVLCBFPj4pO1xuICBub25lOlxuICAgIHwgKCgpID0+IFJlc3VsdDxVLCBFPilcbiAgICB8ICgoKSA9PiBQcm9taXNlPFJlc3VsdDxVLCBFPj4pXG4gICAgfCBSZXN1bHQ8VSwgRT5cbiAgICB8IFByb21pc2U8UmVzdWx0PFUsIEU+Pjtcbn1cblxudHlwZSBPcHRpb25Tb21lPFQgZXh0ZW5kcyBPcHRpb248dW5rbm93bj5bXT4gPSB7XG4gIFtLIGluIGtleW9mIFRdOiBLIGV4dGVuZHMgbnVtYmVyXG4gICAgPyBUW0tdIGV4dGVuZHMgT3B0aW9uPGluZmVyIFU+XG4gICAgICA/IFVcbiAgICAgIDogbmV2ZXJcbiAgICA6IG5ldmVyO1xufTtcblxuY2xhc3MgT3B0IHtcbiAgLy8gdGFrZXMgaW4gYSBsaXN0IG9mIG9wdGlvbnMgYW5kIHJldHVybnMgYSBuZXcgb3B0aW9uIHdpdGggYSBsaXN0IG9mIHNvbWUgdmFsdWVzIGlmIGFsbCB0aGUgcmVzdWx0cyBhcmUgc29tZSwgYW5kIG5vbmUgaWYgYW55IGFyZSBub25lXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUgVFxuICAgKiBAcGFyYW0gaSAtIGxpc3Qgb2Ygb3B0aW9uc1xuICAgKi9cbiAgc3RhdGljIGFsbDxUIGV4dGVuZHMgT3B0aW9uPHVua25vd24+W10+KC4uLmk6IFsuLi5UXSk6IE9wdGlvbjxPcHRpb25Tb21lPFQ+PiB7XG4gICAgY29uc3QgY2xvc3VyZSA9IGFzeW5jICgpOiBQcm9taXNlPE9wdGlvbjxPcHRpb25Tb21lPFQ+Pj4gPT4ge1xuICAgICAgY29uc3Qgc29tZTogT3B0aW9uU29tZTxUPiA9IFtdIGFzIE9wdGlvblNvbWU8VD47XG4gICAgICBsZXQgbm9uZSA9IDA7XG4gICAgICBjb25zdCByID0gaS5tYXAoYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXNTb21lID0gYXdhaXQgZS5pc1NvbWUoKTtcbiAgICAgICAgaWYgKGlzU29tZSkge1xuICAgICAgICAgIGNvbnN0IG9rID0gYXdhaXQgZS51bndyYXAoKTtcbiAgICAgICAgICByZXR1cm4gW1wic29tZVwiLCBva107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtcIm5vbmVcIiwgbnVsbF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgYSA9IGF3YWl0IFByb21pc2UuYWxsKHIpO1xuICAgICAgZm9yIChjb25zdCBbdCwgdl0gb2YgYSkge1xuICAgICAgICBpZiAodCA9PT0gXCJzb21lXCIpIHtcbiAgICAgICAgICBzb21lLnB1c2godik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uZSsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub25lID4gMCkge1xuICAgICAgICByZXR1cm4gTm9uZTxPcHRpb25Tb21lPFQ+PigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNvbWUoc29tZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT3B0LmZyb21Bc3luYyhjbG9zdXJlKCkpO1xuICB9XG5cbiAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSBvZiBhbiBvcHRpb24sIFByb21pc2U8T3B0aW9uPFQ+PiB0byBPcHRpb248VD4gd2l0aG91dCBhc3luYy9hd2FpdFxuICAvKipcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIHAgLSBwcm9taXNlIG9mIGFuIG9wdGlvbiB0byByZXNvbHZlXG4gICAqIEByZXR1cm5zIHtPcHRpb248VD59IHJlc29sdmVkIG9wdGlvblxuICAgKi9cbiAgc3RhdGljIGZyb21Bc3luYzxUPihwOiBQcm9taXNlPE9wdGlvbjxUPj4pOiBPcHRpb248VD4ge1xuICAgIHJldHVybiBuZXcgS09wdGlvbjxUPihcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBhd2FpdCBwO1xuICAgICAgICBjb25zdCBpc1NvbWUgPSBhd2FpdCByLmlzU29tZSgpO1xuICAgICAgICBpZiAoaXNTb21lKSB7XG4gICAgICAgICAgY29uc3Qgb2sgPSBhd2FpdCByLnVud3JhcCgpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1wic29tZVwiLCBva10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1wibm9uZVwiLCBudWxsXSk7XG4gICAgICB9KSgpXG4gICAgKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbiBPcHRpb24gZnJvbSBhbiBhc3luYyBmdW5jdGlvblxuICAvKipcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIGZuIC0gYXN5bmMgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9wdGlvblxuICAgKiBAcmV0dXJucyB7T3B0aW9uPFQ+fSBvcHRpb24gZnJvbSB0aGUgYXN5bmMgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyBhc3luYzxUPihmbjogKCkgPT4gUHJvbWlzZTxPcHRpb248VD4+KTogT3B0aW9uPFQ+IHtcbiAgICByZXR1cm4gT3B0LmZyb21Bc3luYyhmbigpKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgT3B0aW9uPFQ+IHtcbiAgLy8gQ2hlY2tzIGlmIHRoZSBPcHRpb24gaXMgU29tZVxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IGlmIHRoZSBvcHRpb24gaXMgU29tZVxuICAgKi9cbiAgaXNTb21lKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgLy8gQ2hlY2tzIGlmIHRoZSBPcHRpb24gaXMgTm9uZVxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IGlmIHRoZSBvcHRpb24gaXMgTm9uZVxuICAgKi9cbiAgaXNOb25lKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgLy8gUGF0dGVybiBNYXRjaCBhbmQgcmV0dXJuIGEgc3RhbmRhcmQgdmFsdWUgYnkgcHJvdmlkaW5nIG1hcHBlciBmdW5jdGlvbnMgZm9yXG4gIC8vIFNvbWUgb3IgTm9uZVxuICAvKipcbiAgICogQHRlbXBsYXRlIFQsIFVcbiAgICogQHBhcmFtIGZuIC0gc29tZSBtYXBwZXIgZnVuY3Rpb24gYW5kIG5vbmUgbWFwcGVyIGZ1bmN0aW9uLiBCb3RoIG1hcHBlcnMgY2FuXG4gICAqIGJlIGJvdGggc3luYyBvciBhc3luY1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxVPn0gdGhlIHN0YW5kYXJkIHZhbHVlIHRoYXQgYm90aCBtYXBwZXIgbWFwcyB0b1xuICAgKi9cbiAgbWF0Y2g8VT4oZm46IE1hdGNoPFQsIFU+KTogUHJvbWlzZTxVPjtcblxuICAvLyBNYXBzIHRoZSB1bmRlcmx5aW5nIHZhbHVlIHRvIGFub3RoZXIgdmFsdWUsIGlmIGl0IGlzIG5vdCBOb25lXG4gIC8vIE1hcHBlciBmdW5jdGlvbiBjYW4gYmUgYXN5bmMgb3Igc3luYy5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBULCBVXG4gICAqIEBwYXJhbSBmbiAtIG1hcHBlciBmdW5jdGlvbiB0byBtYXAgdGhlIHVuZGVybHlpbmcgdmFsdWUuIENhbiBiZSBzeW5jIG9yIGFzeW5jXG4gICAqIEByZXR1cm5zIHtPcHRpb248VT59IE1hcHBlZCBPcHRpb25cbiAgICovXG4gIG1hcDxVPihmbjogKCh2YWw6IFQpID0+IFUpIHwgKCh2YWw6IFQpID0+IFByb21pc2U8VT4pKTogT3B0aW9uPFU+O1xuXG4gIC8vIEV4ZWN1dGUgdGhlIG1hcHBlciBmdW5jdGlvbiBpZiBpdCBpcyBub3QgTm9uZSBhbmQgdGhlIG1hcHBlciByZXR1cm5zIGFuIE9wdGlvbi5cbiAgLy8gTWFwcGVyIGZ1bmN0aW9uIGNhbiBiZSBhc3luYyBvciBzeW5jLlxuICAvKipcbiAgICogQHRlbXBsYXRlIFQsVVxuICAgKiBAcGFyYW0gZm4gLSBtYXBwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIG9uIE9wdGlvbi4gQ2FuIGJlIGFzeW5jIG9yIHN5bmMuXG4gICAqIEByZXR1cm5zIHtPcHRpb248VT59IE1hcHBlZCBPcHRpb25cbiAgICovXG4gIGFuZFRoZW48VT4oXG4gICAgZm46ICgodjogVCkgPT4gT3B0aW9uPFU+KSB8ICgodjogVCkgPT4gUHJvbWlzZTxPcHRpb248VT4+KVxuICApOiBPcHRpb248VT47XG5cbiAgLy8gUmVtb3ZlcyB0aGUgT3B0aW9uIHR5cGUgYW5kIHJldHVybiB0aGUgdW5kZXJseWluZyB2YWx1ZS5cbiAgLy8gVGhyb3dzIGFuIGVycm9yIGlmIE5vbmUgd2FzIGluc2lkZS5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBUXG4gICAqIEB0aHJvd3Mge1Vud3JhcEVycm9yfSBJbiB0aGUgZXZlbnQgdGhhdCBpdCB3YXMgYXR0ZW1wdGluZyB0byB1bndyYXAgTm9uZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFQ+fSBUaGUgdW5kZXJseWluZyB2YWx1ZVxuICAgKi9cbiAgdW53cmFwKCk6IFByb21pc2U8VD47XG5cbiAgLy8gUmVtb3ZlcyB0aGUgT3B0aW9uIHR5cGUgYW5kIHJldHVybiB0aGUgdW5kZXJseWluZyB2YWx1ZSwgYnV0IGlmIGl0IHJlc29sdmVzIHRvXG4gIC8vIE5vbmUsIGhhbmRsZSBpdCBieSBjaGVja2luZyB0aGUgYXJndW1lbnQgcGFzc2VkIGluLlxuICAvLyBBcmd1bWVudCBjYW4gYmUgYSBkZWZlcnJlZCAoZnVuY3Rpb24pIG9yIGltbWVkaWF0ZSB2YWx1ZSwgYW5kIGNhbiBiZSBzeW5jXG4gIC8vIG9yIGFzeW5jLlxuICAvKipcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIGRlZiAtIHRoZSB2YWx1ZSB0byByZXR1cm4gaW4gY2FzZSBvcHRpb24gcmV0dXJucyB0byBub25lLiBJdCBjYW4gYmUgaW1tZWRhdGVcbiAgICogdmFsdWUgKGxpdGVyYWwpIG9yIGl0IGNhbiBiZSBkZWZlcnJlZCAoZnVuY3Rpb24gdGhhdCByZXR1cm5zIFQpLiBCb3RoIGNhbiBiZSBzeW5jIG9yXG4gICAqIGFzeW5jXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VD59IFRoZSB1bmRlcmx5aW5nIHZhbHVlXG4gICAqL1xuICB1bndyYXBPcihkZWY6IFQgfCBQcm9taXNlPFQ+IHwgKCgpID0+IFQpIHwgKCgpID0+IFByb21pc2U8VD4pKTogUHJvbWlzZTxUPjtcblxuICAvLyBDb252ZXJ0cyBhbiBvcHRpb24gaW50byBhbiBFcnIgUmVzdWx0LiBVc2VyIG5lZWRzIHRvIHByb3ZpZGUgdGhlIE9rXG4gIC8vIFJlc3VsdCBpbiBjYXNlIHRoZSBvcHRpb24gcmVzb2x2ZXMgdG8gTm9uZVxuICAvKipcbiAgICogQHRlbXBsYXRlIE8sIFRcbiAgICogQHBhcmFtIHtPIHwgUHJvbWlzZTxPPn0gb2sgLSBPayB2YWx1ZSBpbiB0aGUgZXZlbnQgT3B0aW9uIHJlc29sdmVzIHRvIE5vbmVcbiAgICogQHJldHVybiB7UmVzdWx0PFQsRT59IC0gVGhlIG9wdGlvbiB2YWx1ZSBhcyBlcnIgcmVzdWx0XG4gICAqL1xuICBhc0VycjxPPihvazogTyB8IFByb21pc2U8Tz4pOiBSZXN1bHQ8TywgVD47XG5cbiAgLy8gQ29udmVydHMgYW4gb3B0aW9uIGludG8gYW4gT2sgUmVzdWx0LiBVc2VyIG5lZWRzIHRvIHByb3ZpZGUgdGhlIEVyclxuICAvLyBSZXN1bHQgaW4gY2FzZSB0aGUgb3B0aW9uIHJlc29sdmVzIHRvIE5vbmVcbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBFLCBUXG4gICAqIEBwYXJhbSB7RSB8IFByb21pc2U8RT59IGVyciAtIEVycm9yIHZhbHVlIGluIHRoZSBldmVudCBPcHRpb24gcmVzb2x2ZXMgdG8gTm9uZVxuICAgKiBAcmV0dXJuIHtSZXN1bHQ8VCxFPn0gLSBUaGUgb3B0aW9uIHZhbHVlIGFzIG9rIHJlc3VsdFxuICAgKi9cbiAgYXNPazxFPihlcnI6IEUgfCBQcm9taXNlPEU+KTogUmVzdWx0PFQsIEU+O1xuXG4gIC8vIENvbnZlcnRzIGFuIG9wdGlvbiB0byBhIHJlc3VsdCwgYnkgbWFwcGluZyBib3RoIE5vbmUgYW5kIFNvbWUgdG8gYVxuICAvLyBzdGFuZGFyZCByZXN1bHQgdHlwZS5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBULCBPLCBFXG4gICAqIEBwYXJhbSBmbiAtIHRoZSBtYXBwZXIgZnVuY3Rpb25zIGZvciBTb21lIGFuZCBOb25lLiBBbGwgbWFwcGVyIGZ1bmN0aW9uc1xuICAgKiBjYW4gYmUgc3luYyBvciBhc3luYy4gQWRkaXRpb25hbGx5LCBOb25lIGFjY2VwdHMgbGl0ZXJhbCB2YWx1ZXMgaW5zdGVhZFxuICAgKiBvciBtYXBwZXJzXG4gICAqIEByZXR1cm5zIHtSZXN1bHQ8TyxFPn0gUmVzdWx0IGRlcml2ZWQgZnJvbSB0aGUgT3B0aW9uXG4gICAqL1xuICBhc1Jlc3VsdDxPLCBFPihmbjogUmVzdWx0TWF0Y2g8VCwgTywgRT4pOiBSZXN1bHQ8TywgRT47XG5cbiAgLy8gUnVucyB0aGUgZnVuY3Rpb24gcGFzc2VkIGluIGJ1dCBkb2VzIG5vdCBjYXB0dXJlIHRoZSByZXR1cm4gdmFsdWUuXG4gIC8vIEFjY2VwdHMgYm90aCBzeW5jIGFuZCBhc3luYyBmdW5jdGlvbnMuXG4gIC8vICoqRG9lcyBub3QgaGFuZGxlIGV4Y2VwdGlvbnMqKlxuICAvKipcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIHNpZGVFZmZlY3QgLSBTaWRlIGVmZmVjdCB0byBleGVjdXRlLiBDYW4gYmUgc3luYyBvciBhc3luY1xuICAgKiBAcmV0dXJucyB7T3B0aW9uPFQ+fSBPcmlnaW5hbCBPcHRpb25cbiAgICovXG4gIHJ1bihzaWRlRWZmZWN0OiAoKHQ6IFQpID0+IHZvaWQpIHwgKCh0OiBUKSA9PiBQcm9taXNlPHZvaWQ+KSk6IE9wdGlvbjxUPjtcblxuICAvLyBPYnRhaW4gdGhlIHVuZGVybHlpbmcgdmFsdWUgb3IgbmF0aXZlLCB3aGljaCBpcyB0aGUgbmF0aXZlIHZlcnNpb24gb2YgT3B0aW9uXG4gIG5hdGl2ZSgpOiBQcm9taXNlPFQgfCBudWxsPjtcbn1cblxudHlwZSBJU29tZTxUPiA9IFtcInNvbWVcIiwgVF07XG50eXBlIElOb25lID0gW1wibm9uZVwiLCBudWxsXTtcblxuY2xhc3MgS09wdGlvbjxUPiBpbXBsZW1lbnRzIE9wdGlvbjxUPiB7XG4gIHZhbHVlOiBQcm9taXNlPElTb21lPFQ+IHwgSU5vbmU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbHVlOiBQcm9taXNlPElTb21lPFQ+PiB8IFByb21pc2U8SU5vbmU+IHwgUHJvbWlzZTxJU29tZTxUPiB8IElOb25lPlxuICApIHtcbiAgICB0aGlzLnZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgfVxuXG4gIGFzeW5jIG5hdGl2ZSgpOiBQcm9taXNlPFQgfCBudWxsPiB7XG4gICAgY29uc3QgWywgdl0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgYW5kVGhlbjxVPihcbiAgICBmbjogKCh2OiBUKSA9PiBPcHRpb248VT4pIHwgKCh2OiBUKSA9PiBQcm9taXNlPE9wdGlvbjxVPj4pXG4gICk6IE9wdGlvbjxVPiB7XG4gICAgcmV0dXJuIG5ldyBLT3B0aW9uPFU+KFxuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgW3R5cGUsIHZhbHVlXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh0eXBlID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIHJldHVybiBbdHlwZSwgdmFsdWVdIGFzIElOb25lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IGF3YWl0IGZuKHZhbHVlKTtcbiAgICAgICAgICBjb25zdCBpc1NvbWUgPSBhd2FpdCBtYXBwZWQuaXNTb21lKCk7XG4gICAgICAgICAgaWYgKGlzU29tZSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IGF3YWl0IG1hcHBlZC51bndyYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBbXCJzb21lXCIsIHZdIGFzIElTb21lPFU+O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW1wibm9uZVwiLCBudWxsXSBhcyBJTm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pKClcbiAgICApO1xuICB9XG5cbiAgYXNFcnI8Tz4ob2s6IFByb21pc2U8Tz4gfCBPKTogUmVzdWx0PE8sIFQ+IHtcbiAgICByZXR1cm4gbmV3IEtSZXN1bHQ8TywgVD4oXG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBbdCwgdl0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBjb25zdCBzID0gYXdhaXQgb2s7XG4gICAgICAgICAgcmV0dXJuIFtcIm9rXCIsIHNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXCJlcnJcIiwgdl07XG4gICAgICAgIH1cbiAgICAgIH0pKClcbiAgICApO1xuICB9XG5cbiAgYXNPazxFPihlcnI6IFByb21pc2U8RT4gfCBFKTogUmVzdWx0PFQsIEU+IHtcbiAgICByZXR1cm4gbmV3IEtSZXN1bHQ8VCwgRT4oXG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBbdCwgdl0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBjb25zdCBzID0gYXdhaXQgZXJyO1xuICAgICAgICAgIHJldHVybiBbXCJlcnJcIiwgc107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtcIm9rXCIsIHZdO1xuICAgICAgICB9XG4gICAgICB9KSgpXG4gICAgKTtcbiAgfVxuXG4gIGFzUmVzdWx0PE8sIEU+KGZuOiBSZXN1bHRNYXRjaDxULCBPLCBFPik6IFJlc3VsdDxPLCBFPiB7XG4gICAgcmV0dXJuIG5ldyBLUmVzdWx0PG51bWJlciwgRT4oUHJvbWlzZS5yZXNvbHZlKFtcIm9rXCIsIDBdKSkuYW5kVGhlbihcbiAgICAgIGFzeW5jICgpOiBQcm9taXNlPFJlc3VsdDxPLCBFPj4gPT4ge1xuICAgICAgICBjb25zdCBbdCwgdl0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgICAgICByZXR1cm4gYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAodCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4ubm9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGYgPSBmbi5ub25lO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuLm5vbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uc29tZSh2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGlzTm9uZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBbdF0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB0ID09PSBcIm5vbmVcIjtcbiAgfVxuXG4gIGFzeW5jIGlzU29tZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBbdF0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB0ID09PSBcInNvbWVcIjtcbiAgfVxuXG4gIG1hcDxVPihmbjogKCh2YWw6IFQpID0+IFUpIHwgKCh2YWw6IFQpID0+IFByb21pc2U8VT4pKTogT3B0aW9uPFU+IHtcbiAgICByZXR1cm4gbmV3IEtPcHRpb248VT4oXG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBbdCwgdl0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICByZXR1cm4gW3QsIHZdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZ2ID0gYXdhaXQgZm4odik7XG4gICAgICAgICAgcmV0dXJuIFt0LCBmdl07XG4gICAgICAgIH1cbiAgICAgIH0pKClcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgbWF0Y2g8VT4oZm46IE1hdGNoPFQsIFU+KTogUHJvbWlzZTxVPiB7XG4gICAgY29uc3QgW3QsIHZdID0gYXdhaXQgdGhpcy52YWx1ZTtcbiAgICBpZiAodCA9PT0gXCJzb21lXCIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm4uc29tZSh2KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgZm4ubm9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGYgPSBmbi5ub25lIGFzICgoKSA9PiBVKSB8ICgoKSA9PiBQcm9taXNlPFU+KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbi5ub25lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBydW4oc2lkZUVmZmVjdDogKCh0OiBUKSA9PiB2b2lkKSB8ICgodDogVCkgPT4gUHJvbWlzZTx2b2lkPikpOiBPcHRpb248VD4ge1xuICAgIHJldHVybiBuZXcgS09wdGlvbihcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFt0LCB2XSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh0ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIHJldHVybiBbdCwgdl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgc2lkZUVmZmVjdCh2KTtcbiAgICAgICAgICByZXR1cm4gW3QsIHZdO1xuICAgICAgICB9XG4gICAgICB9KSgpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVud3JhcCgpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBbdCwgdl0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgIGlmICh0ID09PSBcInNvbWVcIikge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBVbndyYXBFcnJvcihcbiAgICAgICAgXCJGYWlsZWQgdG8gdW53cmFwXCIsXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiRXhwZWN0ZWQgU29tZSBnb3QgTm9uZVwiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVud3JhcE9yKFxuICAgIGRlZjogUHJvbWlzZTxUPiB8ICgoKSA9PiBUKSB8ICgoKSA9PiBQcm9taXNlPFQ+KSB8IFRcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgW3QsIHZdID0gYXdhaXQgdGhpcy52YWx1ZTtcbiAgICBpZiAodCA9PT0gXCJzb21lXCIpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGYgPSBkZWYgYXMgKCgpID0+IFQpIHwgKCgpID0+IFByb21pc2U8VD4pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBTb21lPFQ+KHY6IFQpOiBPcHRpb248VD4ge1xuICByZXR1cm4gbmV3IEtPcHRpb24oUHJvbWlzZS5yZXNvbHZlKFtcInNvbWVcIiwgdl0pKTtcbn1cblxuZnVuY3Rpb24gTm9uZTxUPigpOiBPcHRpb248VD4ge1xuICByZXR1cm4gbmV3IEtPcHRpb248VD4oUHJvbWlzZS5yZXNvbHZlKFtcIm5vbmVcIiwgbnVsbF0pKTtcbn1cblxuZXhwb3J0IHsgT3B0aW9uLCBLT3B0aW9uLCBNYXRjaCwgUmVzdWx0TWF0Y2gsIFNvbWUsIE5vbmUsIElTb21lLCBJTm9uZSwgT3B0IH07XG4iXX0=

/***/ }),

/***/ 6692:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ Res),
/* harmony export */   "Ok": () => (/* binding */ Ok),
/* harmony export */   "UG": () => (/* binding */ Err),
/* harmony export */   "Wc": () => (/* binding */ KResult)
/* harmony export */ });
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(2207);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(1215);


// Creates a new instance of `Result` as the `err` variant.
/**
 * @template T,X
 * @param error - error to be converted to a Result
 * @returns {Result<T,X>} - new instance of `Result` as the `err` variant
 */
function Err(error) {
    return new KResult((async () => {
        const err = await error;
        return ["err", err];
    })());
}
// Creates a new instance of `Result` as the `ok` variant.
/**
 * @template T,X
 * @param val - value to be converted to a Result
 * @returns {Result<T,X>} - new instance of `Result` as the `ok` variant
 */
function Ok(val) {
    return new KResult((async () => {
        const v = await val;
        return ["ok", v];
    })());
}
class Res {
    // Resolve the promise of a result, Promise<Result<T, E>> to Result<T,E> without async/await
    /**
     * @template T,E
     * @param p - promise of a result to resolve
     * @returns {Result<T,E>} - resolved result
     */
    static fromAsync(p) {
        return new KResult((async () => {
            const r = await p;
            const isOk = await r.isOk();
            if (isOk) {
                const ok = await r.unwrap();
                return Promise.resolve(["ok", ok]);
            }
            else {
                const err = await r.unwrapErr();
                return Promise.resolve(["err", err]);
            }
        })());
    }
    // Create a Result from async function
    /**
     * @template T,E
     * @param fn - function that results in a Result, asynchronous
     * @returns {Result<T,E>} - resolved result
     */
    static async(fn) {
        return Res.fromAsync(fn());
    }
    // takes in a list of results and returns a new result with a list of ok values if all results are ok or a list of error values if at least one result is an error
    /**
     * @template
     * @param i - list of results
     */
    static all(...i) {
        const closure = async () => {
            const ok = [];
            const err = [];
            const r = i.map(async (e) => {
                const isOk = await e.isOk();
                if (isOk) {
                    const okR = await e.unwrap();
                    return ["ok", okR];
                }
                else {
                    const errR = await e.unwrapErr();
                    return ["err", errR];
                }
            });
            const a = await Promise.all(r);
            for (const [t, v] of a) {
                if (t === "ok") {
                    ok.push(v);
                }
                else {
                    err.push(v);
                }
            }
            if (err.length > 0) {
                return Err(err);
            }
            return Ok(ok);
        };
        return Res.fromAsync(closure());
    }
}
class KResult {
    value;
    constructor(value) {
        this.value = value;
    }
    andThen(fn) {
        const wrapped = async () => {
            const [type, val] = await this.value;
            if (type === "err") {
                return [type, val];
            }
            else {
                const mapped = await fn(val);
                const mType = await mapped.isOk();
                if (mType) {
                    const okVal = await Promise.resolve(mapped.unwrap());
                    return ["ok", okVal];
                }
                else {
                    const errVal = await Promise.resolve(mapped.unwrapErr());
                    return ["err", errVal];
                }
            }
        };
        return new KResult(wrapped());
    }
    async isOk() {
        const [type] = await this.value;
        return type === "ok";
    }
    async isErr() {
        const [type] = await this.value;
        return type === "err";
    }
    async unwrap() {
        const [type, val] = await this.value;
        if (type === "ok") {
            return val;
        }
        throw new _error_js__WEBPACK_IMPORTED_MODULE_0__/* .UnwrapError */ .e("Failed to unwrap", "result", "Expected Ok got Error");
    }
    async unwrapErr() {
        const [type, val] = await this.value;
        if (type === "err") {
            return val;
        }
        throw new _error_js__WEBPACK_IMPORTED_MODULE_0__/* .UnwrapError */ .e("Failed to unwrap", "result", "Expected Err got Ok");
    }
    map(mapper) {
        return new KResult((async () => {
            const [type, val] = await this.value;
            if (type === "ok") {
                const mapped = await mapper(val);
                return ["ok", mapped];
            }
            else {
                return ["err", val];
            }
        })());
    }
    mapErr(mapper) {
        return new KResult((async () => {
            const [type, val] = await this.value;
            if (type === "err") {
                const err = await mapper(val);
                return ["err", err];
            }
            else {
                return [type, val];
            }
        })());
    }
    async native() {
        const [, val] = await this.value;
        return val;
    }
    async match(fn) {
        const [type, val] = await this.value;
        if (type === "ok") {
            return Promise.resolve(fn.ok(val));
        }
        else {
            return Promise.resolve(fn.err(val));
        }
    }
    async unwrapOr(i) {
        const [type, val] = await this.value;
        if (type === "ok") {
            return val;
        }
        else {
            if (typeof i === "function") {
                const f = i;
                return f(val);
            }
            else {
                return Promise.resolve(i);
            }
        }
    }
    err() {
        const closure = async () => {
            const [t, v] = await this.value;
            if (t === "err") {
                return ["some", v];
            }
            else {
                return ["none", null];
            }
        };
        return new _option_js__WEBPACK_IMPORTED_MODULE_1__/* .KOption */ .mD(closure());
    }
    exec(sideEffect, mapper = (e) => {
        if (e instanceof Error) {
            return Promise.resolve(e);
        }
        else {
            return Promise.resolve(new Error(JSON.stringify(e)));
        }
    }) {
        const closure = async () => {
            const [t, v] = await this.value;
            if (t === "err") {
                const err = await mapper(v);
                return [t, err];
            }
            else {
                try {
                    await sideEffect(v);
                }
                catch (e) {
                    if (e instanceof Error) {
                        return ["err", e];
                    }
                    else if (typeof e === "string") {
                        return ["err", new Error(e)];
                    }
                    else {
                        return ["err", new Error(JSON.stringify(e))];
                    }
                }
                return [t, v];
            }
        };
        return new KResult(closure());
    }
    ok() {
        const closure = async () => {
            const [t, v] = await this.value;
            if (t === "ok") {
                return ["some", v];
            }
            else {
                return ["none", null];
            }
        };
        return new _option_js__WEBPACK_IMPORTED_MODULE_1__/* .KOption */ .mD(closure());
    }
    run(sideEffect) {
        return new KResult((async () => {
            const [t, v] = await this.value;
            if (t === "err") {
                return [t, v];
            }
            else {
                await sideEffect(v);
                return [t, v];
            }
        })());
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL3Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBZ0IsT0FBTyxFQUFVLE1BQU0sYUFBYSxDQUFDO0FBRTVELDJEQUEyRDtBQUMzRDs7OztHQUlHO0FBQ0gsU0FBUyxHQUFHLENBQU8sS0FBcUI7SUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FDTCxDQUFDO0FBQ0osQ0FBQztBQUVELDBEQUEwRDtBQUMxRDs7OztHQUlHO0FBQ0gsU0FBUyxFQUFFLENBQWUsR0FBbUI7SUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNWLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FDTCxDQUFDO0FBQ0osQ0FBQztBQXFCRCxNQUFNLEdBQUc7SUFDUCw0RkFBNEY7SUFDNUY7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxTQUFTLENBQU8sQ0FBd0I7UUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNWLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM1QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFPLEVBQStCO1FBQ2hELE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxrS0FBa0s7SUFDbEs7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FDUixHQUFHLENBQVM7UUFFWixNQUFNLE9BQU8sR0FBRyxLQUFLLElBQWdELEVBQUU7WUFDckUsTUFBTSxFQUFFLEdBQWdCLEVBQTRCLENBQUM7WUFDckQsTUFBTSxHQUFHLEdBQWlCLEVBQTZCLENBQUM7WUFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixJQUFJLElBQUksRUFBRTtvQkFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQWdDLENBQUM7aUJBQ25EO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBa0MsQ0FBQztpQkFDdkQ7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDWjtxQkFBTTtvQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNiO2FBQ0Y7WUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtZQUNELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQTJIRCxNQUFNLE9BQU87SUFDWCxLQUFLLENBRytCO0lBRXBDLFlBQ0UsS0FHbUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sQ0FDTCxFQUFvRTtRQUVwRSxNQUFNLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRTtZQUN6QixNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFlLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQyxJQUFJLEtBQUssRUFBRTtvQkFDVCxNQUFNLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ3JELE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFjLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDekQsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQWUsQ0FBQztpQkFDdEM7YUFDRjtRQUNILENBQUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxPQUFPLENBQU8sT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE1BQU0sSUFBSSxXQUFXLENBQ25CLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsdUJBQXVCLENBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQVM7UUFDYixNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDbEIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE1BQU0sSUFBSSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELEdBQUcsQ0FBSSxNQUE4QztRQUNuRCxPQUFPLElBQUksT0FBTyxDQUNoQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ1YsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUNqQixNQUFNLE1BQU0sR0FBTSxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQWMsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBZSxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBSSxNQUE4QztRQUN0RCxPQUFPLElBQUksT0FBTyxDQUNoQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ1YsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUNsQixNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQWUsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBYyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUksRUFBa0I7UUFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FDWixDQUE4RDtRQUU5RCxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNO1lBQ0wsSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQStDLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsR0FBRztRQUNELE1BQU0sT0FBTyxHQUFHLEtBQUssSUFBK0IsRUFBRTtZQUNwRCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQWdCLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQW1CLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUM7UUFDRixPQUFPLElBQUksT0FBTyxDQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksQ0FDRixVQUF3RCxFQUN4RCxTQUEyQyxDQUFDLENBQUksRUFBRSxFQUFFO1FBQ2xELElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTtZQUN0QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRTtZQUN6QixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFtQixDQUFDO2FBQ25DO2lCQUFNO2dCQUNMLElBQUk7b0JBQ0YsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTt3QkFDdEIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQW1CLENBQUM7cUJBQ3JDO3lCQUFNLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUNoQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFtQixDQUFDO3FCQUNoRDt5QkFBTTt3QkFDTCxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBbUIsQ0FBQztxQkFDaEU7aUJBQ0Y7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQWMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxPQUFPLENBQVcsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsRUFBRTtRQUNBLE1BQU0sT0FBTyxHQUFHLEtBQUssSUFBK0IsRUFBRTtZQUNwRCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQWdCLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQW1CLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUM7UUFDRixPQUFPLElBQUksT0FBTyxDQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELEdBQUcsQ0FBQyxVQUF3RDtRQUMxRCxPQUFPLElBQUksT0FBTyxDQUNoQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ1YsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZjtpQkFBTTtnQkFDTCxNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FDTCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQVUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW53cmFwRXJyb3IgfSBmcm9tIFwiLi9lcnJvci5qc1wiO1xuaW1wb3J0IHsgSU5vbmUsIElTb21lLCBLT3B0aW9uLCBPcHRpb24gfSBmcm9tIFwiLi9vcHRpb24uanNcIjtcblxuLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBgUmVzdWx0YCBhcyB0aGUgYGVycmAgdmFyaWFudC5cbi8qKlxuICogQHRlbXBsYXRlIFQsWFxuICogQHBhcmFtIGVycm9yIC0gZXJyb3IgdG8gYmUgY29udmVydGVkIHRvIGEgUmVzdWx0XG4gKiBAcmV0dXJucyB7UmVzdWx0PFQsWD59IC0gbmV3IGluc3RhbmNlIG9mIGBSZXN1bHRgIGFzIHRoZSBgZXJyYCB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIEVycjxULCBYPihlcnJvcjogWCB8IFByb21pc2U8WD4pOiBSZXN1bHQ8VCwgWD4ge1xuICByZXR1cm4gbmV3IEtSZXN1bHQ8VCwgWD4oXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGVyciA9IGF3YWl0IGVycm9yO1xuICAgICAgcmV0dXJuIFtcImVyclwiLCBlcnJdO1xuICAgIH0pKClcbiAgKTtcbn1cblxuLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBgUmVzdWx0YCBhcyB0aGUgYG9rYCB2YXJpYW50LlxuLyoqXG4gKiBAdGVtcGxhdGUgVCxYXG4gKiBAcGFyYW0gdmFsIC0gdmFsdWUgdG8gYmUgY29udmVydGVkIHRvIGEgUmVzdWx0XG4gKiBAcmV0dXJucyB7UmVzdWx0PFQsWD59IC0gbmV3IGluc3RhbmNlIG9mIGBSZXN1bHRgIGFzIHRoZSBgb2tgIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gT2s8VCwgWCA9IG5ldmVyPih2YWw6IFQgfCBQcm9taXNlPFQ+KTogUmVzdWx0PFQsIFg+IHtcbiAgcmV0dXJuIG5ldyBLUmVzdWx0PFQsIFg+KFxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2ID0gYXdhaXQgdmFsO1xuICAgICAgcmV0dXJuIFtcIm9rXCIsIHZdO1xuICAgIH0pKClcbiAgKTtcbn1cblxuaW50ZXJmYWNlIE1hdGNoPFQsIEUsIFU+IHtcbiAgb2s6ICgodmFsOiBUKSA9PiBQcm9taXNlPFU+KSB8ICgodmFsOiBUKSA9PiBVKTtcbiAgZXJyOiAoKHZhbDogRSkgPT4gUHJvbWlzZTxVPikgfCAoKHZhbDogRSkgPT4gVSk7XG59XG5cbnR5cGUgUmVzdWx0RXJyPFQgZXh0ZW5kcyBSZXN1bHQ8dW5rbm93biwgdW5rbm93bj5bXT4gPSBUIGV4dGVuZHMgQXJyYXk8XG4gIFJlc3VsdDx1bmtub3duLCBpbmZlciBFPlxuPlxuICA/IEVbXVxuICA6IG5ldmVyO1xuXG50eXBlIFJlc3VsdE9rPFQgZXh0ZW5kcyBSZXN1bHQ8dW5rbm93biwgdW5rbm93bj5bXT4gPSB7XG4gIFtLIGluIGtleW9mIFRdOiBLIGV4dGVuZHMgbnVtYmVyXG4gICAgPyBUW0tdIGV4dGVuZHMgUmVzdWx0PGluZmVyIFUsIHVua25vd24+XG4gICAgICA/IFVcbiAgICAgIDogbmV2ZXJcbiAgICA6IG5ldmVyO1xufTtcblxuY2xhc3MgUmVzIHtcbiAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSBvZiBhIHJlc3VsdCwgUHJvbWlzZTxSZXN1bHQ8VCwgRT4+IHRvIFJlc3VsdDxULEU+IHdpdGhvdXQgYXN5bmMvYXdhaXRcbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBULEVcbiAgICogQHBhcmFtIHAgLSBwcm9taXNlIG9mIGEgcmVzdWx0IHRvIHJlc29sdmVcbiAgICogQHJldHVybnMge1Jlc3VsdDxULEU+fSAtIHJlc29sdmVkIHJlc3VsdFxuICAgKi9cbiAgc3RhdGljIGZyb21Bc3luYzxULCBFPihwOiBQcm9taXNlPFJlc3VsdDxULCBFPj4pOiBSZXN1bHQ8VCwgRT4ge1xuICAgIHJldHVybiBuZXcgS1Jlc3VsdDxULCBFPihcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBhd2FpdCBwO1xuICAgICAgICBjb25zdCBpc09rID0gYXdhaXQgci5pc09rKCk7XG4gICAgICAgIGlmIChpc09rKSB7XG4gICAgICAgICAgY29uc3Qgb2sgPSBhd2FpdCByLnVud3JhcCgpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1wib2tcIiwgb2tdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSBhd2FpdCByLnVud3JhcEVycigpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1wiZXJyXCIsIGVycl0pO1xuICAgICAgICB9XG4gICAgICB9KSgpXG4gICAgKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIFJlc3VsdCBmcm9tIGFzeW5jIGZ1bmN0aW9uXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUgVCxFXG4gICAqIEBwYXJhbSBmbiAtIGZ1bmN0aW9uIHRoYXQgcmVzdWx0cyBpbiBhIFJlc3VsdCwgYXN5bmNocm9ub3VzXG4gICAqIEByZXR1cm5zIHtSZXN1bHQ8VCxFPn0gLSByZXNvbHZlZCByZXN1bHRcbiAgICovXG4gIHN0YXRpYyBhc3luYzxULCBFPihmbjogKCkgPT4gUHJvbWlzZTxSZXN1bHQ8VCwgRT4+KTogUmVzdWx0PFQsIEU+IHtcbiAgICByZXR1cm4gUmVzLmZyb21Bc3luYyhmbigpKTtcbiAgfVxuXG4gIC8vIHRha2VzIGluIGEgbGlzdCBvZiByZXN1bHRzIGFuZCByZXR1cm5zIGEgbmV3IHJlc3VsdCB3aXRoIGEgbGlzdCBvZiBvayB2YWx1ZXMgaWYgYWxsIHJlc3VsdHMgYXJlIG9rIG9yIGEgbGlzdCBvZiBlcnJvciB2YWx1ZXMgaWYgYXQgbGVhc3Qgb25lIHJlc3VsdCBpcyBhbiBlcnJvclxuICAvKipcbiAgICogQHRlbXBsYXRlXG4gICAqIEBwYXJhbSBpIC0gbGlzdCBvZiByZXN1bHRzXG4gICAqL1xuICBzdGF0aWMgYWxsPFQgZXh0ZW5kcyBSZXN1bHQ8dW5rbm93biwgdW5rbm93bj5bXT4oXG4gICAgLi4uaTogWy4uLlRdXG4gICk6IFJlc3VsdDxSZXN1bHRPazxUPiwgUmVzdWx0RXJyPFQ+PiB7XG4gICAgY29uc3QgY2xvc3VyZSA9IGFzeW5jICgpOiBQcm9taXNlPFJlc3VsdDxSZXN1bHRPazxUPiwgUmVzdWx0RXJyPFQ+Pj4gPT4ge1xuICAgICAgY29uc3Qgb2s6IFJlc3VsdE9rPFQ+ID0gW10gYXMgdW5rbm93biBhcyBSZXN1bHRPazxUPjtcbiAgICAgIGNvbnN0IGVycjogUmVzdWx0RXJyPFQ+ID0gW10gYXMgdW5rbm93biBhcyBSZXN1bHRFcnI8VD47XG4gICAgICBjb25zdCByID0gaS5tYXAoYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXNPayA9IGF3YWl0IGUuaXNPaygpO1xuICAgICAgICBpZiAoaXNPaykge1xuICAgICAgICAgIGNvbnN0IG9rUiA9IGF3YWl0IGUudW53cmFwKCk7XG4gICAgICAgICAgcmV0dXJuIFtcIm9rXCIsIG9rUl0gYXMgW1wib2tcIiwgUmVzdWx0T2s8VD5bbnVtYmVyXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXJyUiA9IGF3YWl0IGUudW53cmFwRXJyKCk7XG4gICAgICAgICAgcmV0dXJuIFtcImVyclwiLCBlcnJSXSBhcyBbXCJlcnJcIiwgUmVzdWx0RXJyPFQ+W251bWJlcl1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGEgPSBhd2FpdCBQcm9taXNlLmFsbChyKTtcbiAgICAgIGZvciAoY29uc3QgW3QsIHZdIG9mIGEpIHtcbiAgICAgICAgaWYgKHQgPT09IFwib2tcIikge1xuICAgICAgICAgIG9rLnB1c2godik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyLnB1c2godik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlcnIubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gRXJyKGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm4gT2sob2spO1xuICAgIH07XG4gICAgcmV0dXJuIFJlcy5mcm9tQXN5bmMoY2xvc3VyZSgpKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUmVzdWx0PFQsIEU+IHtcbiAgLy8gcmV0dXJucyBhIFByb21pc2Ugb2YgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgdmFyaWFudCBvZiB0aGUgUmVzdWx0IGlzIFwib2tcIlxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHZhcmlhbnQgb2YgdGhlIFJlc3VsdCBpcyBcIm9rXCJcbiAgICovXG4gIGlzT2soKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAvLyByZXR1cm5zIGEgUHJvbWlzZSBvZiBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB2YXJpYW50IG9mIHRoZSBSZXN1bHQgaXMgXCJlcnJcIlxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IC0gYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHZhcmlhbnQgb2YgdGhlIFJlc3VsdCBpcyBcImVyclwiXG4gICAqL1xuICBpc0VycigpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUgVFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn0gLSBwcm9taXNlIG9mIHRoZSB1bndyYXBwZWQgdmFsdWVcbiAgICogQHRocm93cyB7VW53cmFwRXJyb3J9IC0gaWYgdGhlIHZhcmlhbnQgb2YgdGhlIFJlc3VsdCBpcyBcImVyclwiXG4gICAqL1xuICAvLyByZXR1cm5zIGEgUHJvbWlzZSBvZiB0aGUgdmFsdWUgb2YgdGhlIFJlc3VsdCBpZiBpdHMgdmFyaWFudCBpcyBcIm9rXCIuIElmIGl0cyB2YXJpYW50IGlzIFwiZXJyXCIsIGl0IHRocm93cyBhbiBlcnJvci5cbiAgdW53cmFwKCk6IFByb21pc2U8VD47XG5cbiAgLy8gcmV0dXJucyBhIFByb21pc2Ugb2YgdGhlIHZhbHVlIG9mIHRoZSBSZXN1bHQgaWYgaXRzIHZhcmlhbnQgaXMgXCJva1wiLCBvdGhlcndpc2UgaXQgcmV0dXJucyB0aGUgcHJvdmlkZWQgZGVmYXVsdCB2YWx1ZS5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBUXG4gICAqIEBwYXJhbSBpIC0gZGVmYXVsdCB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgdmFyaWFudCBvZiB0aGUgUmVzdWx0IGlzIFwiZXJyXCIuIEl0IGNhbiBiZSB0aGUgZGVmYXVsdCB2YWx1ZSwgcHJvbWlzZWQgdmFsdWUsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBvciBhc3luYyBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8VD59IC0gcHJvbWlzZSBvZiB0aGUgdW53cmFwcGVkIHZhbHVlXG4gICAqL1xuICB1bndyYXBPcihcbiAgICBpOiBUIHwgUHJvbWlzZTxUPiB8ICgoZXJyOiBFKSA9PiBQcm9taXNlPFQ+KSB8ICgoZXJyOiBFKSA9PiBUKVxuICApOiBQcm9taXNlPFQ+O1xuXG4gIC8vIHJldHVybnMgYSBQcm9taXNlIG9mIHRoZSBlcnJvciB2YWx1ZSBvZiB0aGUgUmVzdWx0IGlmIGl0cyB2YXJpYW50IGlzIFwiZXJyXCIuIElmIGl0cyB2YXJpYW50IGlzIFwib2tcIiwgaXQgdGhyb3dzIGFuIGVycm9yXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUgRVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFPn0gLSBwcm9taXNlIG9mIHRoZSB1bndyYXBwZWQgZXJyb3IgdmFsdWVcbiAgICogQHRocm93cyB7VW53cmFwRXJyb3J9IC0gaWYgdGhlIHZhcmlhbnQgb2YgdGhlIFJlc3VsdCBpcyBcIm9rXCJcbiAgICovXG4gIHVud3JhcEVycigpOiBQcm9taXNlPEU+O1xuXG4gIC8vIGFwcGxpZXMgYSBtYXBwZXIgZnVuY3Rpb24gdG8gdGhlIHZhbHVlIG9mIHRoZSBSZXN1bHQgaWYgaXRzIHZhcmlhbnQgaXMgXCJva1wiIGFuZCByZXR1cm5zIGEgbmV3IFJlc3VsdCB3aXRoIHRoZSBtYXBwZWQgdmFsdWUuIElmIGl0cyB2YXJpYW50IGlzIFwiZXJyXCIsIGl0IHJldHVybnMgdGhlIG9yaWdpbmFsIFJlc3VsdC5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBZLCBFXG4gICAqIEBwYXJhbSBtYXBwZXIgLSBmdW5jdGlvbiB0byBtYXAgdGhlIHZhbHVlIG9mIHRoZSBSZXN1bHQuIG1hcHBlciBjYW4gYmUgYXN5bmMuXG4gICAqIEByZXR1cm5zIHtSZXN1bHQ8WSxFPn0gLSBuZXcgUmVzdWx0IHdpdGggdGhlIG1hcHBlZCB2YWx1ZVxuICAgKi9cbiAgbWFwPFk+KG1hcHBlcjogKChhOiBUKSA9PiBQcm9taXNlPFk+KSB8ICgoYTogVCkgPT4gWSkpOiBSZXN1bHQ8WSwgRT47XG5cbiAgLy8gYXBwbGllcyBhIG1hcHBlciBmdW5jdGlvbiB0byB0aGUgZXJyb3IgdmFsdWUgb2YgdGhlIFJlc3VsdCBpZiBpdHMgdmFyaWFudCBpcyBcImVyclwiIGFuZCByZXR1cm5zIGEgbmV3IFJlc3VsdCB3aXRoIHRoZSBtYXBwZWQgZXJyb3IgdmFsdWUuIElmIGl0cyB2YXJpYW50IGlzIFwib2tcIiwgaXQgcmV0dXJucyB0aGUgb3JpZ2luYWwgUmVzdWx0LlxuICAvKipcbiAgICogQHRlbXBsYXRlIFksIFRcbiAgICogQHBhcmFtIG1hcHBlciAtIGZ1bmN0aW9uIHRvIG1hcCB0aGUgZXJyb3IgdmFsdWUgb2YgdGhlIFJlc3VsdC4gbWFwcGVyIGNhbiBiZSBhc3luYy5cbiAgICogQHJldHVybnMge1Jlc3VsdDxULFk+fSAtIG5ldyBSZXN1bHQgd2l0aCB0aGUgbWFwcGVkIGVycm9yIHZhbHVlXG4gICAqL1xuICBtYXBFcnI8WT4obWFwcGVyOiAoKGE6IEUpID0+IFByb21pc2U8WT4pIHwgKChhOiBFKSA9PiBZKSk6IFJlc3VsdDxULCBZPjtcblxuICAvLyByZXR1cm5zIGEgUHJvbWlzZSBvZiB0aGUgdmFsdWUgb3IgZXJyb3Igb2YgdGhlIFJlc3VsdCByZWdhcmRsZXNzIG9mIGl0cyB2YXJpYW50LlxuICAvKipcbiAgICogQHRlbXBsYXRlIFQsIEVcbiAgICogQHJldHVybnMge1Byb21pc2U8VCB8IEU+fSAtIHByb21pc2Ugb2YgdGhlIHZhbHVlIG9yIGVycm9yIG9mIHRoZSBSZXN1bHRcbiAgICovXG4gIG5hdGl2ZSgpOiBQcm9taXNlPFQgfCBFPjtcblxuICAvLyBtZXRob2QgdGhhdCB0YWtlcyBpbiBhIGZ1bmN0aW9uIGZuIHdpdGggb2sgYW5kIGVyciBjYXNlcy4gSXQgYXBwbGllcyB0aGUgY29ycmVzcG9uZGluZyBjYXNlIGJhc2VkIG9uIHRoZSB2YXJpYW50IG9mIHRoZSBSZXN1bHQgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGF0IGNhc2UgYXMgYSBQcm9taXNlLlxuICAvKipcbiAgICogQHRlbXBsYXRlIFVcbiAgICogQHBhcmFtIGZuIC0gZnVuY3Rpb24gd2l0aCBvayBhbmQgZXJyIGNhc2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFU+fSAtIHByb21pc2Ugb2YgdGhlIHJlc3VsdCBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXNlXG4gICAqL1xuICBtYXRjaDxVPihmbjogTWF0Y2g8VCwgRSwgVT4pOiBQcm9taXNlPFU+O1xuXG4gIC8vIFRha2VzIGluIGEgZnVuY3Rpb24gdGhhdCBtYXBzIHRoZSBvayB2YWx1ZSBvZiB0aGUgUmVzdWx0IHRvIGEgbmV3IFJlc3VsdCwgaWYgdGhlIFJlc3VsdCBpcyBvay5cbiAgLy8gUmV0dXJucyB0aGUgbmV3IFJlc3VsdCB0aGF0IHdhcyBtYXBwZWQgZnJvbSB0aGUgb3JpZ2luYWwgUmVzdWx0LlxuICAvLyBJZiB0aGUgUmVzdWx0IGlzIGFuIGVycm9yLCB0aGUgZnVuY3Rpb24gaXMgbm90IGNhbGxlZCwgYW5kIHRoZSBvcmlnaW5hbCBlcnJvciBSZXN1bHQgaXMgcmV0dXJuZWQuXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUgVVxuICAgKiBAcGFyYW0gZm4gLSBmdW5jdGlvbiB0aGF0IG1hcHMgdGhlIG9rIHZhbHVlIG9mIHRoZSBSZXN1bHQgdG8gYSBuZXcgUmVzdWx0LiBmbiBjYW4gYmUgYXN5bmMuXG4gICAqIEByZXR1cm5zIHtSZXN1bHQ8VSxFPn0gLSBuZXcgUmVzdWx0IHRoYXQgd2FzIG1hcHBlZCBmcm9tIHRoZSBvcmlnaW5hbCBSZXN1bHRcbiAgICovXG4gIGFuZFRoZW48VT4oXG4gICAgZm46ICgodmFsOiBUKSA9PiBSZXN1bHQ8VSwgRT4pIHwgKCh2YWw6IFQpID0+IFByb21pc2U8UmVzdWx0PFUsIEU+PilcbiAgKTogUmVzdWx0PFUsIEU+O1xuXG4gIC8vIFJ1bnMgdGhlIGZ1bmN0aW9uIHBhc3NlZCBpbiBidXQgZG9lcyBub3QgY2FwdHVyZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAvLyBBY2NlcHRzIGJvdGggc3luYyBhbmQgYXN5bmMgZnVuY3Rpb25zLlxuICAvLyAqKkRvZXMgbm90IGhhbmRsZSBleGNlcHRpb25zKipcbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBUXG4gICAqIEBwYXJhbSBzaWRlRWZmZWN0IC0gU2lkZSBlZmZlY3QgdG8gZXhlY3V0ZS4gQ2FuIGJlIHN5bmMgb3IgYXN5bmNcbiAgICogQHJldHVybnMge1Jlc3VsdDxULEU+fSAtIG9yaWdpbmFsIFJlc3VsdFxuICAgKi9cbiAgcnVuKHNpZGVFZmZlY3Q6ICgodDogVCkgPT4gdm9pZCkgfCAoKHQ6IFQpID0+IFByb21pc2U8dm9pZD4pKTogUmVzdWx0PFQsIEU+O1xuXG4gIC8vIFJ1bnMgdGhlIGZ1bmN0aW9uIHBhc3NlZCBpbiBidXQgZG9lcyBub3QgY2FwdHVyZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAvLyBBY2NlcHRzIGJvdGggc3luYyBhbmQgYXN5bmMgZnVuY3Rpb25zLlxuICAvLyAqKkhhbmRsZXMgZXhjZXB0aW9ucyoqXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUgVFxuICAgKiBAcGFyYW0gc2lkZUVmZmVjdCAgLSBTaWRlIGVmZmVjdCB0byBleGVjdXRlLiBDYW4gYmUgc3luYyBvciBhc3luY1xuICAgKiBAcGFyYW0gbWFwcGVyIC0gZnVuY3Rpb24gdG8gbWFwIHRoZSBlcnJvciB2YWx1ZSBvZiB0aGUgUmVzdWx0LiBtYXBwZXIgY2FuIGJlIGFzeW5jLlxuICAgKiBAcmV0dXJucyB7UmVzdWx0PFQsRT59IC0gb3JpZ2luYWwgUmVzdWx0XG4gICAqL1xuICBleGVjKFxuICAgIHNpZGVFZmZlY3Q6ICgodDogVCkgPT4gdm9pZCkgfCAoKHQ6IFQpID0+IFByb21pc2U8dm9pZD4pLFxuICAgIG1hcHBlcj86IChlOiBFKSA9PiBFcnJvciB8IFByb21pc2U8RXJyb3I+XG4gICk6IFJlc3VsdDxULCBFcnJvcj47XG5cbiAgLy8gUmV0dXJucyBhbiBPcHRpb24gb2YgdGhlIE9rIHJlc3VsdC4gRXJyb3Igd2lsbCByZXN1bHQgaW4gTm9uZVxuICAvKipcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHJldHVybnMge09wdGlvbjxUPn0gLSBPcHRpb24gb2YgdGhlIE9rIHJlc3VsdFxuICAgKi9cbiAgb2soKTogT3B0aW9uPFQ+O1xuXG4gIC8vIFJldHVybnMgYW4gT3B0aW9uIG9mIHRoZSBFcnJvciByZXN1bHQuIE9rIHdpbGwgcmVzdWx0IGluIE5vbmVcbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBFXG4gICAqIEByZXR1cm5zIHtPcHRpb248RT59IC0gT3B0aW9uIG9mIHRoZSBFcnJvciByZXN1bHRcbiAgICovXG4gIGVycigpOiBPcHRpb248RT47XG59XG5cbmNsYXNzIEtSZXN1bHQ8VCwgWD4gaW1wbGVtZW50cyBSZXN1bHQ8VCwgWD4ge1xuICB2YWx1ZTpcbiAgICB8IFByb21pc2U8W1wib2tcIiwgVF0+XG4gICAgfCBQcm9taXNlPFtcImVyclwiLCBYXT5cbiAgICB8IFByb21pc2U8W1wiZXJyXCIsIFhdIHwgW1wib2tcIiwgVF0+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbHVlOlxuICAgICAgfCBQcm9taXNlPFtcIm9rXCIsIFRdPlxuICAgICAgfCBQcm9taXNlPFtcImVyclwiLCBYXT5cbiAgICAgIHwgUHJvbWlzZTxbXCJlcnJcIiwgWF0gfCBbXCJva1wiLCBUXT5cbiAgKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYW5kVGhlbjxVPihcbiAgICBmbjogKCh2YWw6IFQpID0+IFJlc3VsdDxVLCBYPikgfCAoKHZhbDogVCkgPT4gUHJvbWlzZTxSZXN1bHQ8VSwgWD4+KVxuICApOiBSZXN1bHQ8VSwgWD4ge1xuICAgIGNvbnN0IHdyYXBwZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBbdHlwZSwgdmFsXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgICBpZiAodHlwZSA9PT0gXCJlcnJcIikge1xuICAgICAgICByZXR1cm4gW3R5cGUsIHZhbF0gYXMgW1wiZXJyXCIsIFhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWFwcGVkID0gYXdhaXQgZm4odmFsKTtcbiAgICAgICAgY29uc3QgbVR5cGUgPSBhd2FpdCBtYXBwZWQuaXNPaygpO1xuICAgICAgICBpZiAobVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBva1ZhbCA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShtYXBwZWQudW53cmFwKCkpO1xuICAgICAgICAgIHJldHVybiBbXCJva1wiLCBva1ZhbF0gYXMgW1wib2tcIiwgVV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXJyVmFsID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG1hcHBlZC51bndyYXBFcnIoKSk7XG4gICAgICAgICAgcmV0dXJuIFtcImVyclwiLCBlcnJWYWxdIGFzIFtcImVyclwiLCBYXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBLUmVzdWx0PFUsIFg+KHdyYXBwZWQoKSk7XG4gIH1cblxuICBhc3luYyBpc09rKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IFt0eXBlXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwib2tcIjtcbiAgfVxuXG4gIGFzeW5jIGlzRXJyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IFt0eXBlXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiZXJyXCI7XG4gIH1cblxuICBhc3luYyB1bndyYXAoKTogUHJvbWlzZTxUPiB8IG5ldmVyIHtcbiAgICBjb25zdCBbdHlwZSwgdmFsXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09IFwib2tcIikge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVud3JhcEVycm9yKFxuICAgICAgXCJGYWlsZWQgdG8gdW53cmFwXCIsXG4gICAgICBcInJlc3VsdFwiLFxuICAgICAgXCJFeHBlY3RlZCBPayBnb3QgRXJyb3JcIlxuICAgICk7XG4gIH1cblxuICBhc3luYyB1bndyYXBFcnIoKTogUHJvbWlzZTxYPiB8IG5ldmVyIHtcbiAgICBjb25zdCBbdHlwZSwgdmFsXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09IFwiZXJyXCIpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHRocm93IG5ldyBVbndyYXBFcnJvcihcIkZhaWxlZCB0byB1bndyYXBcIiwgXCJyZXN1bHRcIiwgXCJFeHBlY3RlZCBFcnIgZ290IE9rXCIpO1xuICB9XG5cbiAgbWFwPFk+KG1hcHBlcjogKChhOiBUKSA9PiBQcm9taXNlPFk+KSB8ICgoYTogVCkgPT4gWSkpOiBSZXN1bHQ8WSwgWD4ge1xuICAgIHJldHVybiBuZXcgS1Jlc3VsdDxZLCBYPihcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFt0eXBlLCB2YWxdID0gYXdhaXQgdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwib2tcIikge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZDogWSA9IGF3YWl0IG1hcHBlcih2YWwpO1xuICAgICAgICAgIHJldHVybiBbXCJva1wiLCBtYXBwZWRdIGFzIFtcIm9rXCIsIFldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXCJlcnJcIiwgdmFsXSBhcyBbXCJlcnJcIiwgWF07XG4gICAgICAgIH1cbiAgICAgIH0pKClcbiAgICApO1xuICB9XG5cbiAgbWFwRXJyPFk+KG1hcHBlcjogKChhOiBYKSA9PiBQcm9taXNlPFk+KSB8ICgoYTogWCkgPT4gWSkpOiBSZXN1bHQ8VCwgWT4ge1xuICAgIHJldHVybiBuZXcgS1Jlc3VsdDxULCBZPihcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFt0eXBlLCB2YWxdID0gYXdhaXQgdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZXJyXCIpIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSBhd2FpdCBtYXBwZXIodmFsKTtcbiAgICAgICAgICByZXR1cm4gW1wiZXJyXCIsIGVycl0gYXMgW1wiZXJyXCIsIFldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbdHlwZSwgdmFsXSBhcyBbXCJva1wiLCBUXTtcbiAgICAgICAgfVxuICAgICAgfSkoKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBuYXRpdmUoKTogUHJvbWlzZTxUIHwgWD4ge1xuICAgIGNvbnN0IFssIHZhbF0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBhc3luYyBtYXRjaDxVPihmbjogTWF0Y2g8VCwgWCwgVT4pOiBQcm9taXNlPFU+IHtcbiAgICBjb25zdCBbdHlwZSwgdmFsXSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgaWYgKHR5cGUgPT09IFwib2tcIikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbi5vayh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbi5lcnIodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdW53cmFwT3IoXG4gICAgaTogUHJvbWlzZTxUPiB8ICgoZXJyOiBYKSA9PiBQcm9taXNlPFQ+KSB8ICgoZXJyOiBYKSA9PiBUKSB8IFRcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgW3R5cGUsIHZhbF0gPSBhd2FpdCB0aGlzLnZhbHVlO1xuICAgIGlmICh0eXBlID09PSBcIm9rXCIpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGYgPSBpIGFzICgoZXJyOiBYKSA9PiBQcm9taXNlPFQ+KSB8ICgoZXJyOiBYKSA9PiBUKTtcbiAgICAgICAgcmV0dXJuIGYodmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXJyKCk6IE9wdGlvbjxYPiB7XG4gICAgY29uc3QgY2xvc3VyZSA9IGFzeW5jICgpOiBQcm9taXNlPElTb21lPFg+IHwgSU5vbmU+ID0+IHtcbiAgICAgIGNvbnN0IFt0LCB2XSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgICBpZiAodCA9PT0gXCJlcnJcIikge1xuICAgICAgICByZXR1cm4gW1wic29tZVwiLCB2XSBhcyBbXCJzb21lXCIsIFhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcIm5vbmVcIiwgbnVsbF0gYXMgW1wibm9uZVwiLCBudWxsXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgS09wdGlvbjxYPihjbG9zdXJlKCkpO1xuICB9XG5cbiAgZXhlYyhcbiAgICBzaWRlRWZmZWN0OiAoKHQ6IFQpID0+IHZvaWQpIHwgKCh0OiBUKSA9PiBQcm9taXNlPHZvaWQ+KSxcbiAgICBtYXBwZXI6IChlOiBYKSA9PiBFcnJvciB8IFByb21pc2U8RXJyb3I+ID0gKGU6IFgpID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KGUpKSk7XG4gICAgICB9XG4gICAgfVxuICApOiBSZXN1bHQ8VCwgRXJyb3I+IHtcbiAgICBjb25zdCBjbG9zdXJlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgW3QsIHZdID0gYXdhaXQgdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0ID09PSBcImVyclwiKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IGF3YWl0IG1hcHBlcih2KTtcbiAgICAgICAgcmV0dXJuIFt0LCBlcnJdIGFzIFtcImVyclwiLCBFcnJvcl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHNpZGVFZmZlY3Qodik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gW1wiZXJyXCIsIGVdIGFzIFtcImVyclwiLCBFcnJvcl07XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIFtcImVyclwiLCBuZXcgRXJyb3IoZSldIGFzIFtcImVyclwiLCBFcnJvcl07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJlcnJcIiwgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KGUpKV0gYXMgW1wiZXJyXCIsIEVycm9yXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0LCB2XSBhcyBbXCJva1wiLCBUXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgS1Jlc3VsdDxULCBFcnJvcj4oY2xvc3VyZSgpKTtcbiAgfVxuXG4gIG9rKCk6IE9wdGlvbjxUPiB7XG4gICAgY29uc3QgY2xvc3VyZSA9IGFzeW5jICgpOiBQcm9taXNlPElTb21lPFQ+IHwgSU5vbmU+ID0+IHtcbiAgICAgIGNvbnN0IFt0LCB2XSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgICBpZiAodCA9PT0gXCJva1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJzb21lXCIsIHZdIGFzIFtcInNvbWVcIiwgVF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW1wibm9uZVwiLCBudWxsXSBhcyBbXCJub25lXCIsIG51bGxdO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBLT3B0aW9uPFQ+KGNsb3N1cmUoKSk7XG4gIH1cblxuICBydW4oc2lkZUVmZmVjdDogKCh0OiBUKSA9PiB2b2lkKSB8ICgodDogVCkgPT4gUHJvbWlzZTx2b2lkPikpOiBSZXN1bHQ8VCwgWD4ge1xuICAgIHJldHVybiBuZXcgS1Jlc3VsdDxULCBYPihcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFt0LCB2XSA9IGF3YWl0IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh0ID09PSBcImVyclwiKSB7XG4gICAgICAgICAgcmV0dXJuIFt0LCB2XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCBzaWRlRWZmZWN0KHYpO1xuICAgICAgICAgIHJldHVybiBbdCwgdl07XG4gICAgICAgIH1cbiAgICAgIH0pKClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEVyciwgT2ssIFJlc3VsdCwgUmVzLCBLUmVzdWx0IH07XG4iXX0=

/***/ }),

/***/ 3706:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "m8": () => (/* binding */ input_history),
  "pM": () => (/* binding */ historyEntry)
});

// UNUSED EXPORTS: dataElement, dataElementArray, metadata

;// CONCATENATED MODULE: ./node_modules/.pnpm/zod@3.21.0/node_modules/zod/lib/index.mjs
var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: issueData.message || errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            syncPairs.push({
                key: await pair.key,
                value: await pair.value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (typeof value.value !== "undefined" || pair.alwaysSet) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        return this._path.concat(this._key);
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        const error = new ZodError(ctx.common.issues);
        return { success: false, error };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        if (typeof ctx.data === "undefined") {
            return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
        }
        return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this, this._def);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// Adapted from https://stackoverflow.com/a/3143231
const datetimeRegex = (args) => {
    if (args.precision) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
        }
    }
    else if (args.precision === 0) {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
        }
    }
    else {
        if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
        }
        else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
        }
    }
};
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    constructor() {
        super(...arguments);
        this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
        /**
         * @deprecated Use z.string().min(1) instead.
         * @see {@link ZodString.min}
         */
        this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
        this.trim = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
        this.toLowerCase = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
        this.toUpperCase = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            }
            //
            );
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodObject      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return ZodArray.create(deepPartialify(schema.element));
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    syncPairs.push({
                        key,
                        value: await pair.value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return Object.keys(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else {
        return null;
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            return OK(async (...args) => {
                const error = new ZodError([]);
                const parsedArgs = await this._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await fn(...parsedArgs);
                const parsedReturns = await this._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            return OK((...args) => {
                const parsedArgs = this._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = fn(...parsedArgs.data);
                const parsedReturns = this._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values) {
        return ZodEnum.create(values);
    }
    exclude(values) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data);
            if (ctx.common.async) {
                return Promise.resolve(processed).then((processed) => {
                    return this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                });
            }
            else {
                return this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "refinement") {
            const executeRefinement = (acc
            // effect: RefinementEffect<any>
            ) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                // if (base.status === "aborted") return INVALID;
                // if (base.status === "dirty") {
                //   return { status: "dirty", value: base.value };
                // }
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    // if (base.status === "aborted") return INVALID;
                    // if (base.status === "dirty") {
                    //   return { status: "dirty", value: base.value };
                    // }
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
const custom = (check, params = {}, 
/* @deprecated */
fatal) => {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
                const p = typeof params === "function" ? params(data) : params;
                const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                const p2 = typeof p === "string" ? { message: p } : p;
                ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
        });
    return ZodAny.create();
};
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    get objectUtil () { return objectUtil; },
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});



;// CONCATENATED MODULE: ./lib/commonjs/lib/input.js

// Policies
const policyResult = unionType([literalType("pass"), literalType("warn"), literalType("fail")]);
const policyData = objectType({
    pass: arrayType(stringType()),
    warn: arrayType(stringType()),
    fail: arrayType(stringType()),
});
const base = objectType({
    result: policyResult,
    resultDetails: policyData,
});
// Meta data
const testResultMetadata = base
    .extend({
    type: literalType("test-result"),
    pass: numberType().min(0),
    fail: numberType().min(0),
    skip: numberType().min(0),
})
    .strict();
const documentationMetadata = base
    .extend({
    type: literalType("documentation"),
})
    .strict();
const codeQualityMetadata = base
    .extend({
    type: literalType("code-quality"),
    qualityRating: stringType(),
})
    .strict();
const testCoverageMetadata = base
    .extend({
    type: literalType("test-coverage"),
    delta: optionalType(objectType({
        line: numberType().min(-100).max(100),
        statement: numberType().min(-100).max(100),
        function: numberType().min(-100).max(100),
        branch: numberType().min(-100).max(100),
    })
        .strict()
        .nullable()),
    line: numberType().min(0).max(100),
    statement: numberType().min(0).max(100),
    function: numberType().min(0).max(100),
    branch: numberType().min(0).max(100),
})
    .strict();
const metadata = discriminatedUnionType("type", [
    codeQualityMetadata,
    documentationMetadata,
    testCoverageMetadata,
    testResultMetadata,
]);
// input object
const dataElement = objectType({
    name: stringType(),
    url: stringType().url(),
    data: metadata,
}).strict();
const dataElementArray = arrayType(dataElement);
const historyEntry = objectType({
    sha: stringType(),
    url: stringType(),
    action: stringType(),
    items: dataElementArray,
}).strict();
const input_history = arrayType(historyEntry);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2lucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sS0FBSyxHQUVOLE1BQU0sS0FBSyxDQUFDO0FBRWIsV0FBVztBQUNYLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVoRixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDeEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Q0FDdEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ2xCLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLGFBQWEsRUFBRSxVQUFVO0NBQzFCLENBQUMsQ0FBQztBQUVILFlBQVk7QUFFWixNQUFNLGtCQUFrQixHQUFHLElBQUk7S0FDNUIsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDNUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDdEIsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFDO0FBRVosTUFBTSxxQkFBcUIsR0FBRyxJQUFJO0tBQy9CLE1BQU0sQ0FBQztJQUNOLElBQUksRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO0NBQy9CLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQztBQUVaLE1BQU0sbUJBQW1CLEdBQUcsSUFBSTtLQUM3QixNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUM3QixhQUFhLEVBQUUsTUFBTSxFQUFFO0NBQ3hCLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQztBQUNaLE1BQU0sb0JBQW9CLEdBQUcsSUFBSTtLQUM5QixNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUM5QixLQUFLLEVBQUUsUUFBUSxDQUNiLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2pDLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0tBQ3BDLENBQUM7U0FDQyxNQUFNLEVBQUU7U0FDUixRQUFRLEVBQUUsQ0FDZDtJQUNELElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUM5QixTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDbkMsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ2xDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztDQUNqQyxDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUM7QUFFWixNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7SUFDMUMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ25CLENBQUMsQ0FBQztBQUVILGVBQWU7QUFFZixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDekIsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNkLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxFQUFFLFFBQVE7Q0FDZixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFWixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU1QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDMUIsR0FBRyxFQUFFLE1BQU0sRUFBRTtJQUNiLEdBQUcsRUFBRSxNQUFNLEVBQUU7SUFDYixNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ2hCLEtBQUssRUFBRSxnQkFBZ0I7Q0FDeEIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRVosTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBZXBDLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFycmF5LFxuICBkaXNjcmltaW5hdGVkVW5pb24sXG4gIGxpdGVyYWwsXG4gIG51bWJlcixcbiAgb2JqZWN0LFxuICBvcHRpb25hbCxcbiAgc3RyaW5nLFxuICB1bmlvbixcbiAgeixcbn0gZnJvbSBcInpvZFwiO1xuXG4vLyBQb2xpY2llc1xuY29uc3QgcG9saWN5UmVzdWx0ID0gdW5pb24oW2xpdGVyYWwoXCJwYXNzXCIpLCBsaXRlcmFsKFwid2FyblwiKSwgbGl0ZXJhbChcImZhaWxcIildKTtcblxuY29uc3QgcG9saWN5RGF0YSA9IG9iamVjdCh7XG4gIHBhc3M6IGFycmF5KHN0cmluZygpKSxcbiAgd2FybjogYXJyYXkoc3RyaW5nKCkpLFxuICBmYWlsOiBhcnJheShzdHJpbmcoKSksXG59KTtcblxuY29uc3QgYmFzZSA9IG9iamVjdCh7XG4gIHJlc3VsdDogcG9saWN5UmVzdWx0LFxuICByZXN1bHREZXRhaWxzOiBwb2xpY3lEYXRhLFxufSk7XG5cbi8vIE1ldGEgZGF0YVxuXG5jb25zdCB0ZXN0UmVzdWx0TWV0YWRhdGEgPSBiYXNlXG4gIC5leHRlbmQoe1xuICAgIHR5cGU6IGxpdGVyYWwoXCJ0ZXN0LXJlc3VsdFwiKSxcbiAgICBwYXNzOiBudW1iZXIoKS5taW4oMCksXG4gICAgZmFpbDogbnVtYmVyKCkubWluKDApLFxuICAgIHNraXA6IG51bWJlcigpLm1pbigwKSxcbiAgfSlcbiAgLnN0cmljdCgpO1xuXG5jb25zdCBkb2N1bWVudGF0aW9uTWV0YWRhdGEgPSBiYXNlXG4gIC5leHRlbmQoe1xuICAgIHR5cGU6IGxpdGVyYWwoXCJkb2N1bWVudGF0aW9uXCIpLFxuICB9KVxuICAuc3RyaWN0KCk7XG5cbmNvbnN0IGNvZGVRdWFsaXR5TWV0YWRhdGEgPSBiYXNlXG4gIC5leHRlbmQoe1xuICAgIHR5cGU6IGxpdGVyYWwoXCJjb2RlLXF1YWxpdHlcIiksXG4gICAgcXVhbGl0eVJhdGluZzogc3RyaW5nKCksXG4gIH0pXG4gIC5zdHJpY3QoKTtcbmNvbnN0IHRlc3RDb3ZlcmFnZU1ldGFkYXRhID0gYmFzZVxuICAuZXh0ZW5kKHtcbiAgICB0eXBlOiBsaXRlcmFsKFwidGVzdC1jb3ZlcmFnZVwiKSxcbiAgICBkZWx0YTogb3B0aW9uYWwoXG4gICAgICBvYmplY3Qoe1xuICAgICAgICBsaW5lOiBudW1iZXIoKS5taW4oLTEwMCkubWF4KDEwMCksXG4gICAgICAgIHN0YXRlbWVudDogbnVtYmVyKCkubWluKC0xMDApLm1heCgxMDApLFxuICAgICAgICBmdW5jdGlvbjogbnVtYmVyKCkubWluKC0xMDApLm1heCgxMDApLFxuICAgICAgICBicmFuY2g6IG51bWJlcigpLm1pbigtMTAwKS5tYXgoMTAwKSxcbiAgICAgIH0pXG4gICAgICAgIC5zdHJpY3QoKVxuICAgICAgICAubnVsbGFibGUoKVxuICAgICksXG4gICAgbGluZTogbnVtYmVyKCkubWluKDApLm1heCgxMDApLFxuICAgIHN0YXRlbWVudDogbnVtYmVyKCkubWluKDApLm1heCgxMDApLFxuICAgIGZ1bmN0aW9uOiBudW1iZXIoKS5taW4oMCkubWF4KDEwMCksXG4gICAgYnJhbmNoOiBudW1iZXIoKS5taW4oMCkubWF4KDEwMCksXG4gIH0pXG4gIC5zdHJpY3QoKTtcblxuY29uc3QgbWV0YWRhdGEgPSBkaXNjcmltaW5hdGVkVW5pb24oXCJ0eXBlXCIsIFtcbiAgY29kZVF1YWxpdHlNZXRhZGF0YSxcbiAgZG9jdW1lbnRhdGlvbk1ldGFkYXRhLFxuICB0ZXN0Q292ZXJhZ2VNZXRhZGF0YSxcbiAgdGVzdFJlc3VsdE1ldGFkYXRhLFxuXSk7XG5cbi8vIGlucHV0IG9iamVjdFxuXG5jb25zdCBkYXRhRWxlbWVudCA9IG9iamVjdCh7XG4gIG5hbWU6IHN0cmluZygpLFxuICB1cmw6IHN0cmluZygpLnVybCgpLFxuICBkYXRhOiBtZXRhZGF0YSxcbn0pLnN0cmljdCgpO1xuXG5jb25zdCBkYXRhRWxlbWVudEFycmF5ID0gYXJyYXkoZGF0YUVsZW1lbnQpO1xuXG5jb25zdCBoaXN0b3J5RW50cnkgPSBvYmplY3Qoe1xuICBzaGE6IHN0cmluZygpLFxuICB1cmw6IHN0cmluZygpLFxuICBhY3Rpb246IHN0cmluZygpLFxuICBpdGVtczogZGF0YUVsZW1lbnRBcnJheSxcbn0pLnN0cmljdCgpO1xuXG5jb25zdCBoaXN0b3J5ID0gYXJyYXkoaGlzdG9yeUVudHJ5KTtcblxudHlwZSBEYXRhRWxlbWVudCA9IHouaW5mZXI8dHlwZW9mIGRhdGFFbGVtZW50PjtcbmRlY2xhcmUgbGV0IHg6IERhdGFFbGVtZW50O1xudHlwZSBNZXRhZGF0YUVudW0gPSB0eXBlb2YgeC5kYXRhLnR5cGU7XG50eXBlIERhdGFFbGVtZW50QXJyYXkgPSB6LmluZmVyPHR5cGVvZiBkYXRhRWxlbWVudEFycmF5PjtcbnR5cGUgSGlzdG9yeUVudHJ5ID0gei5pbmZlcjx0eXBlb2YgaGlzdG9yeUVudHJ5PjtcbnR5cGUgSGlzdG9yeSA9IHouaW5mZXI8dHlwZW9mIGhpc3Rvcnk+O1xudHlwZSBQb2xpY3lSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBwb2xpY3lSZXN1bHQ+O1xudHlwZSBQb2xpY3lEYXRhID0gei5pbmZlcjx0eXBlb2YgcG9saWN5RGF0YT47XG50eXBlIEFjdGlvbklucHV0ID0ge1xuICBjdXJyZW50OiBIaXN0b3J5RW50cnk7XG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XG59O1xuXG5leHBvcnQgeyBtZXRhZGF0YSwgZGF0YUVsZW1lbnQsIGRhdGFFbGVtZW50QXJyYXksIGhpc3RvcnlFbnRyeSwgaGlzdG9yeSB9O1xuXG5leHBvcnQgdHlwZSB7XG4gIEFjdGlvbklucHV0LFxuICBQb2xpY3lEYXRhLFxuICBNZXRhZGF0YUVudW0sXG4gIERhdGFFbGVtZW50LFxuICBEYXRhRWxlbWVudEFycmF5LFxuICBIaXN0b3J5RW50cnksXG4gIFBvbGljeVJlc3VsdCxcbiAgSGlzdG9yeSxcbn07XG4iXX0=

/***/ }),

/***/ 6460:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ App)
/* harmony export */ });
class App {
    #input;
    #service;
    #io;
    constructor(input, service, io) {
        this.#input = input;
        this.#service = service;
        this.#io = io;
    }
    run() {
        return this.#input
            .retrieve()
            .mapErr((x) => [x])
            .andThen((x) => this.#service.render(x))
            .run((o) => {
            this.#io.set("currentMarkdown", o.currentMarkdown);
            this.#io.set("historyMarkdown", o.historyMarkdown);
        })
            .err();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxNQUFNLE9BQU8sR0FBRztJQUNMLE1BQU0sQ0FBaUI7SUFDdkIsUUFBUSxDQUFnQjtJQUV4QixHQUFHLENBQVc7SUFFdkIsWUFBWSxLQUFxQixFQUFFLE9BQXNCLEVBQUUsRUFBWTtRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU07YUFDZixRQUFRLEVBQUU7YUFDVixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNULElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dFJldHJpZXZlciB9IGZyb20gXCIuL2ludGVyZmFjZS9pbnB1dC1yZXRyaWV2ZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclNlcnZpY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2Uvc2VydmljZS5qc1wiO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSBcIi4vY29yZS9vcHRpb24uanNcIjtcbmltcG9ydCB7IEFjdGlvbklPIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2lvLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICByZWFkb25seSAjaW5wdXQ6IElucHV0UmV0cmlldmVyO1xuICByZWFkb25seSAjc2VydmljZTogUmVuZGVyU2VydmljZTtcblxuICByZWFkb25seSAjaW86IEFjdGlvbklPO1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0OiBJbnB1dFJldHJpZXZlciwgc2VydmljZTogUmVuZGVyU2VydmljZSwgaW86IEFjdGlvbklPKSB7XG4gICAgdGhpcy4jaW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLiNzZXJ2aWNlID0gc2VydmljZTtcbiAgICB0aGlzLiNpbyA9IGlvO1xuICB9XG5cbiAgcnVuKCk6IE9wdGlvbjxFcnJvcltdPiB7XG4gICAgcmV0dXJuIHRoaXMuI2lucHV0XG4gICAgICAucmV0cmlldmUoKVxuICAgICAgLm1hcEVycigoeCkgPT4gW3hdKVxuICAgICAgLmFuZFRoZW4oKHgpID0+IHRoaXMuI3NlcnZpY2UucmVuZGVyKHgpKVxuICAgICAgLnJ1bigobykgPT4ge1xuICAgICAgICB0aGlzLiNpby5zZXQoXCJjdXJyZW50TWFya2Rvd25cIiwgby5jdXJyZW50TWFya2Rvd24pO1xuICAgICAgICB0aGlzLiNpby5zZXQoXCJoaXN0b3J5TWFya2Rvd25cIiwgby5oaXN0b3J5TWFya2Rvd24pO1xuICAgICAgfSlcbiAgICAgIC5lcnIoKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 910:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ SimpleRenderService)
/* harmony export */ });
/* harmony import */ var _core_result_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(6692);

class SimpleRenderService {
    #converters;
    #table;
    constructor(converters, table) {
        this.#converters = converters;
        this.#table = table;
    }
    itemToHeader(item) {
        return _core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Res.async */ .LV.async(async () => {
            const converted = await Promise.all(this.#converters.map((c) => c.convertHeader(item).native()));
            const top = converted.filter((x) => x != null);
            if (top.length !== 1) {
                if (top.length > 1) {
                    return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(new Error(`Multiple converters matched ${item.data.type}`));
                }
                return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(new Error(`No converters matched ${item.data.type}`));
            }
            return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(top[0]);
        });
    }
    render(input) {
        const headers = input.current.items.map((x) => this.itemToHeader(x));
        const header = _core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Res.all */ .LV.all(...headers).map((x) => x.join("\n\n"));
        const table = this.#table.generateTable(input.history);
        return header.andThen((currentMarkdown) => table.map((historyMarkdown) => ({
            currentMarkdown,
            historyMarkdown,
        })));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXJlbmRlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zaW1wbGUtcmVuZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFVLE1BQU0sa0JBQWtCLENBQUM7QUFNeEQsTUFBTSxtQkFBbUI7SUFDZCxXQUFXLENBQWM7SUFDekIsTUFBTSxDQUFpQjtJQUVoQyxZQUFZLFVBQXVCLEVBQUUsS0FBcUI7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFpQjtRQUM1QixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUM1RCxDQUFDO1lBQ0YsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sR0FBRyxDQUNSLElBQUksS0FBSyxDQUFDLCtCQUErQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQzNELENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMseUJBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBVyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWtCO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU5RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEMsZUFBZTtZQUNmLGVBQWU7U0FDaEIsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uSW5wdXQsIERhdGFFbGVtZW50IH0gZnJvbSBcIi4vaW5wdXQuanNcIjtcbmltcG9ydCB7IEVyciwgT2ssIFJlcywgUmVzdWx0IH0gZnJvbSBcIi4vY29yZS9yZXN1bHQuanNcIjtcbmltcG9ydCB7IFJlbmRlclNlcnZpY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2Uvc2VydmljZS5qc1wiO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2NvbnZlcnRlci5qc1wiO1xuaW1wb3J0IHsgVGFibGVHZW5lcmF0b3IgfSBmcm9tIFwiLi9pbnRlcmZhY2UvdGFibGUtZ2VuZXJhdG9yLmpzXCI7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tIFwiLi9vdXRwdXQuanNcIjtcblxuY2xhc3MgU2ltcGxlUmVuZGVyU2VydmljZSBpbXBsZW1lbnRzIFJlbmRlclNlcnZpY2Uge1xuICByZWFkb25seSAjY29udmVydGVyczogQ29udmVydGVyW107XG4gIHJlYWRvbmx5ICN0YWJsZTogVGFibGVHZW5lcmF0b3I7XG5cbiAgY29uc3RydWN0b3IoY29udmVydGVyczogQ29udmVydGVyW10sIHRhYmxlOiBUYWJsZUdlbmVyYXRvcikge1xuICAgIHRoaXMuI2NvbnZlcnRlcnMgPSBjb252ZXJ0ZXJzO1xuICAgIHRoaXMuI3RhYmxlID0gdGFibGU7XG4gIH1cblxuICBpdGVtVG9IZWFkZXIoaXRlbTogRGF0YUVsZW1lbnQpOiBSZXN1bHQ8c3RyaW5nLCBFcnJvcj4ge1xuICAgIHJldHVybiBSZXMuYXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29udmVydGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRoaXMuI2NvbnZlcnRlcnMubWFwKChjKSA9PiBjLmNvbnZlcnRIZWFkZXIoaXRlbSkubmF0aXZlKCkpXG4gICAgICApO1xuICAgICAgY29uc3QgdG9wID0gY29udmVydGVkLmZpbHRlcigoeCkgPT4geCAhPSBudWxsKTtcbiAgICAgIGlmICh0b3AubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIGlmICh0b3AubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHJldHVybiBFcnIoXG4gICAgICAgICAgICBuZXcgRXJyb3IoYE11bHRpcGxlIGNvbnZlcnRlcnMgbWF0Y2hlZCAke2l0ZW0uZGF0YS50eXBlfWApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXJyKG5ldyBFcnJvcihgTm8gY29udmVydGVycyBtYXRjaGVkICR7aXRlbS5kYXRhLnR5cGV9YCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9rKHRvcFswXSBhcyBzdHJpbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGlucHV0OiBBY3Rpb25JbnB1dCk6IFJlc3VsdDxPdXRwdXQsIEVycm9yW10+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gaW5wdXQuY3VycmVudC5pdGVtcy5tYXAoKHgpID0+IHRoaXMuaXRlbVRvSGVhZGVyKHgpKTtcbiAgICBjb25zdCBoZWFkZXIgPSBSZXMuYWxsKC4uLmhlYWRlcnMpLm1hcCgoeCkgPT4geC5qb2luKFwiXFxuXFxuXCIpKTtcblxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy4jdGFibGUuZ2VuZXJhdGVUYWJsZShpbnB1dC5oaXN0b3J5KTtcbiAgICByZXR1cm4gaGVhZGVyLmFuZFRoZW4oKGN1cnJlbnRNYXJrZG93bikgPT5cbiAgICAgIHRhYmxlLm1hcCgoaGlzdG9yeU1hcmtkb3duOiBzdHJpbmcpID0+ICh7XG4gICAgICAgIGN1cnJlbnRNYXJrZG93bixcbiAgICAgICAgaGlzdG9yeU1hcmtkb3duLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaW1wbGVSZW5kZXJTZXJ2aWNlIH07XG4iXX0=

/***/ }),

/***/ 1558:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SimpleTableGenerator)
/* harmony export */ });
/* harmony import */ var _core_result_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(6692);

class SimpleTableGenerator {
    #converters;
    constructor(converters, k) {
        this.#converters = converters;
        k.AssertExtend();
    }
    getHeaders(input) {
        return input
            .map((x) => x.items.map((y) => y.name))
            .flat(1)
            .Unique();
    }
    itemToElement(item) {
        return _core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Res.async */ .LV.async(async () => {
            const converted = await Promise.all(this.#converters.map((c) => c.convertTable(item).native()));
            const top = converted.filter((x) => x != null);
            if (top.length !== 1) {
                if (top.length > 1) {
                    return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(new Error(`Multiple converters matched ${item.data.type}`));
                }
                return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(new Error(`No converters matched ${item.data.type}`));
            }
            return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(top[0]);
        });
    }
    buildTableRow(headers, h) {
        const rowResultRaw = headers.map((header) => {
            const r = h.items.find((x) => x.name === header);
            if (r == null) {
                return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)("`-`");
            }
            return this.itemToElement(r);
        });
        return _core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Res.all */ .LV.all(...rowResultRaw)
            .map((x) => [
            `[${h.sha.Take(6)}](${h.url})`,
            `[Action](${h.action})`,
            ...x,
        ])
            .map((x) => `|${x.join(" | ")} |`);
    }
    buildHeaderRow(h) {
        const headers = ["Commit", "Action", ...h];
        const headerRow1 = `${headers.map((header) => `| ${header} `).join("")}|\n`;
        const headerRow2 = `${headers
            .map((header) => `| ${"-".Repeat(header.length.AtMin(3))} `)
            .join("")}|\n`;
        return headerRow1 + headerRow2;
    }
    generateTable(input) {
        const headers = this.getHeaders(input);
        const headerRow = this.buildHeaderRow(headers);
        // build children
        const rowsResults = input.map((h) => this.buildTableRow(headers, h));
        return _core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Res.all */ .LV.all(...rowsResults)
            .map((x) => headerRow + x.join("\n"))
            .mapErr((x) => x.flat(1));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLWdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2ltcGxlLXRhYmxlLWdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUt4RCxNQUFNLG9CQUFvQjtJQUNmLFdBQVcsQ0FBYztJQUVsQyxZQUFZLFVBQXVCLEVBQUUsQ0FBTztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLE9BQU8sS0FBSzthQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWlCO1FBQzdCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQixNQUFNLFNBQVMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQzNELENBQUM7WUFDRixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDL0MsSUFBSSxHQUFHLENBQUMsTUFB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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFFbGVtZW50LCBIaXN0b3J5RW50cnksIEhpc3RvcnkgfSBmcm9tIFwiLi9pbnB1dC5qc1wiO1xuaW1wb3J0IHsgRXJyLCBPaywgUmVzLCBSZXN1bHQgfSBmcm9tIFwiLi9jb3JlL3Jlc3VsdC5qc1wiO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2NvbnZlcnRlci5qc1wiO1xuaW1wb3J0IHsgVGFibGVHZW5lcmF0b3IgfSBmcm9tIFwiLi9pbnRlcmZhY2UvdGFibGUtZ2VuZXJhdG9yLmpzXCI7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSBcIkBraXJpbm5lZS9jb3JlXCI7XG5cbmNsYXNzIFNpbXBsZVRhYmxlR2VuZXJhdG9yIGltcGxlbWVudHMgVGFibGVHZW5lcmF0b3Ige1xuICByZWFkb25seSAjY29udmVydGVyczogQ29udmVydGVyW107XG5cbiAgY29uc3RydWN0b3IoY29udmVydGVyczogQ29udmVydGVyW10sIGs6IENvcmUpIHtcbiAgICB0aGlzLiNjb252ZXJ0ZXJzID0gY29udmVydGVycztcbiAgICBrLkFzc2VydEV4dGVuZCgpO1xuICB9XG5cbiAgZ2V0SGVhZGVycyhpbnB1dDogSGlzdG9yeSk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgICAgIC5tYXAoKHgpID0+IHguaXRlbXMubWFwKCh5KSA9PiB5Lm5hbWUpKVxuICAgICAgLmZsYXQoMSlcbiAgICAgIC5VbmlxdWUoKTtcbiAgfVxuXG4gIGl0ZW1Ub0VsZW1lbnQoaXRlbTogRGF0YUVsZW1lbnQpOiBSZXN1bHQ8c3RyaW5nLCBFcnJvcj4ge1xuICAgIHJldHVybiBSZXMuYXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29udmVydGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRoaXMuI2NvbnZlcnRlcnMubWFwKChjKSA9PiBjLmNvbnZlcnRUYWJsZShpdGVtKS5uYXRpdmUoKSlcbiAgICAgICk7XG4gICAgICBjb25zdCB0b3AgPSBjb252ZXJ0ZWQuZmlsdGVyKCh4KSA9PiB4ICE9IG51bGwpO1xuICAgICAgaWYgKHRvcC5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgaWYgKHRvcC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIEVycihcbiAgICAgICAgICAgIG5ldyBFcnJvcihgTXVsdGlwbGUgY29udmVydGVycyBtYXRjaGVkICR7aXRlbS5kYXRhLnR5cGV9YClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFcnIobmV3IEVycm9yKGBObyBjb252ZXJ0ZXJzIG1hdGNoZWQgJHtpdGVtLmRhdGEudHlwZX1gKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gT2sodG9wWzBdIGFzIHN0cmluZyk7XG4gICAgfSk7XG4gIH1cblxuICBidWlsZFRhYmxlUm93KGhlYWRlcnM6IHN0cmluZ1tdLCBoOiBIaXN0b3J5RW50cnkpOiBSZXN1bHQ8c3RyaW5nLCBFcnJvcltdPiB7XG4gICAgY29uc3Qgcm93UmVzdWx0UmF3ID0gaGVhZGVycy5tYXAoKGhlYWRlcikgPT4ge1xuICAgICAgY29uc3QgciA9IGguaXRlbXMuZmluZCgoeCkgPT4geC5uYW1lID09PSBoZWFkZXIpO1xuICAgICAgaWYgKHIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gT2soXCJgLWBcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pdGVtVG9FbGVtZW50KHIpO1xuICAgIH0pO1xuICAgIHJldHVybiBSZXMuYWxsKC4uLnJvd1Jlc3VsdFJhdylcbiAgICAgIC5tYXAoKHgpID0+IFtcbiAgICAgICAgYFske2guc2hhLlRha2UoNil9XSgke2gudXJsfSlgLFxuICAgICAgICBgW0FjdGlvbl0oJHtoLmFjdGlvbn0pYCxcbiAgICAgICAgLi4ueCxcbiAgICAgIF0pXG4gICAgICAubWFwKCh4KSA9PiBgfCR7eC5qb2luKFwiIHwgXCIpfSB8YCk7XG4gIH1cblxuICBidWlsZEhlYWRlclJvdyhoOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgaGVhZGVycyA9IFtcIkNvbW1pdFwiLCBcIkFjdGlvblwiLCAuLi5oXTtcbiAgICBjb25zdCBoZWFkZXJSb3cxID0gYCR7aGVhZGVycy5tYXAoKGhlYWRlcikgPT4gYHwgJHtoZWFkZXJ9IGApLmpvaW4oXCJcIil9fFxcbmA7XG4gICAgY29uc3QgaGVhZGVyUm93MiA9IGAke2hlYWRlcnNcbiAgICAgIC5tYXAoKGhlYWRlcikgPT4gYHwgJHtcIi1cIi5SZXBlYXQoaGVhZGVyLmxlbmd0aC5BdE1pbigzKSl9IGApXG4gICAgICAuam9pbihcIlwiKX18XFxuYDtcbiAgICByZXR1cm4gaGVhZGVyUm93MSArIGhlYWRlclJvdzI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYmxlKGlucHV0OiBIaXN0b3J5KTogUmVzdWx0PHN0cmluZywgRXJyb3JbXT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcnMoaW5wdXQpO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IHRoaXMuYnVpbGRIZWFkZXJSb3coaGVhZGVycyk7XG5cbiAgICAvLyBidWlsZCBjaGlsZHJlblxuICAgIGNvbnN0IHJvd3NSZXN1bHRzID0gaW5wdXQubWFwKChoKSA9PiB0aGlzLmJ1aWxkVGFibGVSb3coaGVhZGVycywgaCkpO1xuICAgIHJldHVybiBSZXMuYWxsKC4uLnJvd3NSZXN1bHRzKVxuICAgICAgLm1hcCgoeCkgPT4gaGVhZGVyUm93ICsgeC5qb2luKFwiXFxuXCIpKVxuICAgICAgLm1hcEVycigoeCkgPT4geC5mbGF0KDEpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaW1wbGVUYWJsZUdlbmVyYXRvciB9O1xuIl19

/***/ }),

/***/ 3667:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "K8": () => (/* binding */ toResult),
/* harmony export */   "Rx": () => (/* binding */ parseJSON),
/* harmony export */   "To": () => (/* binding */ stringToOption),
/* harmony export */   "ft": () => (/* binding */ resultToMarkdown),
/* harmony export */   "mu": () => (/* binding */ resultToColor),
/* harmony export */   "rP": () => (/* binding */ emoji)
/* harmony export */ });
/* harmony import */ var _core_result_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(6692);
/* harmony import */ var _core_option_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(1215);


function toResult(du) {
    if (du.success) {
        return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(du.data);
    }
    return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(du.error);
}
function parseJSON(raw) {
    try {
        const json = JSON.parse(raw);
        return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(json);
    }
    catch (e) {
        return (0,_core_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(e);
    }
}
function stringToOption(s) {
    if (s == null) {
        return (0,_core_option_js__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq)();
    }
    return s.length === 0 ? (0,_core_option_js__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq)() : (0,_core_option_js__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD)(s);
}
function emoji(a) {
    switch (a) {
        case "pass":
            return "✅";
        case "fail":
            return "❌";
        case "warn":
            return "⚠️";
        default:
            return "❓";
    }
}
function resultToColor(a) {
    switch (a) {
        case "pass":
            return "brightgreen";
        case "fail":
            return "red";
        case "warn":
            return "yellow";
        default:
            return "lightgrey";
    }
}
function resultToMarkdown(p) {
    if (p.fail.length + p.warn.length + p.pass.length === 0)
        return "";
    const fail = p.fail.map((x) => `* ${emoji("fail")} ${x}`);
    const warn = p.warn.map((x) => `* ${emoji("warn")} ${x}`);
    const pass = p.pass.map((x) => `* ${emoji("pass")} ${x}`);
    return `##### Policies\n${[...fail, ...warn, ...pass].join("\n")}`;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBVSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxJQUFJLEVBQVUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQsU0FBUyxRQUFRLENBQ2YsRUFBb0U7SUFFcEUsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxHQUFXO0lBQy9CLElBQUk7UUFDRixNQUFNLElBQUksR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxDQUFVLENBQUMsQ0FBQztLQUN4QjtBQUNILENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxDQUE0QjtJQUNsRCxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDYixPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxDQUFlO0lBQzVCLFFBQVEsQ0FBQyxFQUFFO1FBQ1QsS0FBSyxNQUFNO1lBQ1QsT0FBTyxHQUFHLENBQUM7UUFDYixLQUFLLE1BQU07WUFDVCxPQUFPLEdBQUcsQ0FBQztRQUNiLEtBQUssTUFBTTtZQUNULE9BQU8sSUFBSSxDQUFDO1FBQ2Q7WUFDRSxPQUFPLEdBQUcsQ0FBQztLQUNkO0FBQ0gsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLENBQWU7SUFDcEMsUUFBUSxDQUFDLEVBQUU7UUFDVCxLQUFLLE1BQU07WUFDVCxPQUFPLGFBQWEsQ0FBQztRQUN2QixLQUFLLE1BQU07WUFDVCxPQUFPLEtBQUssQ0FBQztRQUNmLEtBQUssTUFBTTtZQUNULE9BQU8sUUFBUSxDQUFDO1FBQ2xCO1lBQ0UsT0FBTyxXQUFXLENBQUM7S0FDdEI7QUFDSCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxDQUFhO0lBQ3JDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ25FLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELE9BQU8sbUJBQW1CLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNyRSxDQUFDO0FBRUQsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsY0FBYyxFQUNkLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxHQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBab2RFcnJvciB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IEVyciwgT2ssIFJlc3VsdCB9IGZyb20gXCIuL2NvcmUvcmVzdWx0LmpzXCI7XG5pbXBvcnQgeyBOb25lLCBPcHRpb24sIFNvbWUgfSBmcm9tIFwiLi9jb3JlL29wdGlvbi5qc1wiO1xuaW1wb3J0IHsgUG9saWN5RGF0YSwgUG9saWN5UmVzdWx0IH0gZnJvbSBcIi4vaW5wdXQuanNcIjtcblxuZnVuY3Rpb24gdG9SZXN1bHQ8VD4oXG4gIGR1OiB7IHN1Y2Nlc3M6IHRydWU7IGRhdGE6IFQgfSB8IHsgc3VjY2VzczogZmFsc2U7IGVycm9yOiBab2RFcnJvciB9XG4pOiBSZXN1bHQ8VCwgWm9kRXJyb3I+IHtcbiAgaWYgKGR1LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gT2soZHUuZGF0YSk7XG4gIH1cbiAgcmV0dXJuIEVycihkdS5lcnJvcik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSlNPTjxUPihyYXc6IHN0cmluZyk6IFJlc3VsdDxULCBFcnJvcj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGpzb246IFQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgcmV0dXJuIE9rKGpzb24pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIEVycihlIGFzIEVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdUb09wdGlvbihzOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogT3B0aW9uPHN0cmluZz4ge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIE5vbmUoKTtcbiAgfVxuICByZXR1cm4gcy5sZW5ndGggPT09IDAgPyBOb25lKCkgOiBTb21lKHMpO1xufVxuXG5mdW5jdGlvbiBlbW9qaShhOiBQb2xpY3lSZXN1bHQpIHtcbiAgc3dpdGNoIChhKSB7XG4gICAgY2FzZSBcInBhc3NcIjpcbiAgICAgIHJldHVybiBcIuKchVwiO1xuICAgIGNhc2UgXCJmYWlsXCI6XG4gICAgICByZXR1cm4gXCLinYxcIjtcbiAgICBjYXNlIFwid2FyblwiOlxuICAgICAgcmV0dXJuIFwi4pqg77iPXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIuKdk1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VsdFRvQ29sb3IoYTogUG9saWN5UmVzdWx0KSB7XG4gIHN3aXRjaCAoYSkge1xuICAgIGNhc2UgXCJwYXNzXCI6XG4gICAgICByZXR1cm4gXCJicmlnaHRncmVlblwiO1xuICAgIGNhc2UgXCJmYWlsXCI6XG4gICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICBjYXNlIFwid2FyblwiOlxuICAgICAgcmV0dXJuIFwieWVsbG93XCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcImxpZ2h0Z3JleVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VsdFRvTWFya2Rvd24ocDogUG9saWN5RGF0YSk6IHN0cmluZyB7XG4gIGlmIChwLmZhaWwubGVuZ3RoICsgcC53YXJuLmxlbmd0aCArIHAucGFzcy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xuICBjb25zdCBmYWlsID0gcC5mYWlsLm1hcCgoeCkgPT4gYCogJHtlbW9qaShcImZhaWxcIil9ICR7eH1gKTtcbiAgY29uc3Qgd2FybiA9IHAud2Fybi5tYXAoKHgpID0+IGAqICR7ZW1vamkoXCJ3YXJuXCIpfSAke3h9YCk7XG4gIGNvbnN0IHBhc3MgPSBwLnBhc3MubWFwKCh4KSA9PiBgKiAke2Vtb2ppKFwicGFzc1wiKX0gJHt4fWApO1xuICByZXR1cm4gYCMjIyMjIFBvbGljaWVzXFxuJHtbLi4uZmFpbCwgLi4ud2FybiwgLi4ucGFzc10uam9pbihcIlxcblwiKX1gO1xufVxuXG5leHBvcnQge1xuICB0b1Jlc3VsdCxcbiAgcGFyc2VKU09OLFxuICBzdHJpbmdUb09wdGlvbixcbiAgZW1vamksXG4gIHJlc3VsdFRvTWFya2Rvd24sXG4gIHJlc3VsdFRvQ29sb3IsXG59O1xuIl19

/***/ }),

/***/ 5824:
/***/ ((module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
__nccwpck_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__nccwpck_require__.r(__webpack_exports__);
/* harmony import */ var _external_github_action_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(1076);
/* harmony import */ var _lib_adapters_zod_validator_adapter_js__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(6357);
/* harmony import */ var _external_github_action_i_o_js__WEBPACK_IMPORTED_MODULE_2__ = __nccwpck_require__(8649);
/* harmony import */ var _lib_adapters_io_input_retriever_js__WEBPACK_IMPORTED_MODULE_3__ = __nccwpck_require__(118);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_4__ = __nccwpck_require__(7733);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nccwpck_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_input_js__WEBPACK_IMPORTED_MODULE_5__ = __nccwpck_require__(3706);
/* harmony import */ var _lib_simple_render_service_js__WEBPACK_IMPORTED_MODULE_6__ = __nccwpck_require__(910);
/* harmony import */ var _lib_simple_table_generator_js__WEBPACK_IMPORTED_MODULE_7__ = __nccwpck_require__(1558);
/* harmony import */ var _kirinnee_core__WEBPACK_IMPORTED_MODULE_8__ = __nccwpck_require__(2000);
/* harmony import */ var _kirinnee_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nccwpck_require__.n(_kirinnee_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_main_js__WEBPACK_IMPORTED_MODULE_14__ = __nccwpck_require__(6460);
/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_9__ = __nccwpck_require__(3667);
/* harmony import */ var _lib_converter_code_quality_report_converter_js__WEBPACK_IMPORTED_MODULE_10__ = __nccwpck_require__(9892);
/* harmony import */ var _lib_converter_documentation_converter_js__WEBPACK_IMPORTED_MODULE_11__ = __nccwpck_require__(9017);
/* harmony import */ var _lib_converter_test_result_converter_js__WEBPACK_IMPORTED_MODULE_12__ = __nccwpck_require__(3238);
/* harmony import */ var _lib_converter_test_coverage_converter_js__WEBPACK_IMPORTED_MODULE_13__ = __nccwpck_require__(2112);















const core = new _kirinnee_core__WEBPACK_IMPORTED_MODULE_8__.Kore();
core.ExtendPrimitives();
const log = new _external_github_action_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .GithubActionLogger */ .N();
const historyValidator = new _lib_adapters_zod_validator_adapter_js__WEBPACK_IMPORTED_MODULE_1__/* .ZodValidatorAdapter */ .f(_lib_input_js__WEBPACK_IMPORTED_MODULE_5__/* .history */ .m8);
const historyEntryValidator = new _lib_adapters_zod_validator_adapter_js__WEBPACK_IMPORTED_MODULE_1__/* .ZodValidatorAdapter */ .f(_lib_input_js__WEBPACK_IMPORTED_MODULE_5__/* .historyEntry */ .pM);
const io = new _external_github_action_i_o_js__WEBPACK_IMPORTED_MODULE_2__/* .GithubActionIO */ .l();
const input = new _lib_adapters_io_input_retriever_js__WEBPACK_IMPORTED_MODULE_3__/* .IoInputRetriever */ .Q(io, historyEntryValidator, historyValidator);
const converters = [
    new _lib_converter_code_quality_report_converter_js__WEBPACK_IMPORTED_MODULE_10__/* .CodeQualityReportConverter */ .s(),
    new _lib_converter_documentation_converter_js__WEBPACK_IMPORTED_MODULE_11__/* .DocumentationConverter */ .e(),
    new _lib_converter_test_result_converter_js__WEBPACK_IMPORTED_MODULE_12__/* .TestResultConverter */ .j(),
    new _lib_converter_test_coverage_converter_js__WEBPACK_IMPORTED_MODULE_13__/* .TestCoverageConverter */ .A(),
];
const tableGen = new _lib_simple_table_generator_js__WEBPACK_IMPORTED_MODULE_7__/* .SimpleTableGenerator */ .W(converters, core);
const service = new _lib_simple_render_service_js__WEBPACK_IMPORTED_MODULE_6__/* .SimpleRenderService */ .N(converters, tableGen);
const app = new _lib_main_js__WEBPACK_IMPORTED_MODULE_14__/* .App */ .g(input, service, io);
await app.run().match({
    none: async () => {
        log.info("✅ Successfully extracted metadata");
    },
    some: async (errs) => {
        log.error("❌ Failed to extract metadata");
        for (const err of errs) {
            (0,_actions_core__WEBPACK_IMPORTED_MODULE_4__.setFailed)(err);
            const messages = await (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_9__/* .stringToOption */ .To)(err?.stack).match({
                none: ["❌ No stacktrace found!"],
                some: (stacktrace) => stacktrace.split("\n"),
            });
            for (const m of messages) {
                log.error(m);
            }
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVuRixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUNyQyxNQUFNLGdCQUFnQixHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUQsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BFLE1BQU0sRUFBRSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7QUFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRixNQUFNLFVBQVUsR0FBZ0I7SUFDOUIsSUFBSSwwQkFBMEIsRUFBRTtJQUNoQyxJQUFJLHNCQUFzQixFQUFFO0lBQzVCLElBQUksbUJBQW1CLEVBQUU7SUFDekIsSUFBSSxxQkFBcUIsRUFBRTtDQUM1QixDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV4QyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDcEIsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQWEsRUFBRSxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMxQyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixNQUFNLFFBQVEsR0FBRyxNQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUN0RCxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDaEMsSUFBSSxFQUFFLENBQUMsVUFBa0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDckQsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdpdGh1YkFjdGlvbkxvZ2dlciB9IGZyb20gXCIuL2V4dGVybmFsL2dpdGh1Yi1hY3Rpb24tbG9nZ2VyLmpzXCI7XG5pbXBvcnQgeyBab2RWYWxpZGF0b3JBZGFwdGVyIH0gZnJvbSBcIi4vbGliL2FkYXB0ZXJzL3pvZC12YWxpZGF0b3ItYWRhcHRlci5qc1wiO1xuaW1wb3J0IHsgR2l0aHViQWN0aW9uSU8gfSBmcm9tIFwiLi9leHRlcm5hbC9naXRodWItYWN0aW9uLWktby5qc1wiO1xuaW1wb3J0IHsgSW9JbnB1dFJldHJpZXZlciB9IGZyb20gXCIuL2xpYi9hZGFwdGVycy9pby1pbnB1dC1yZXRyaWV2ZXIuanNcIjtcbmltcG9ydCB7IHNldEZhaWxlZCB9IGZyb20gXCJAYWN0aW9ucy9jb3JlXCI7XG5pbXBvcnQgeyBoaXN0b3J5LCBoaXN0b3J5RW50cnkgfSBmcm9tIFwiLi9saWIvaW5wdXQuanNcIjtcbmltcG9ydCB7IFNpbXBsZVJlbmRlclNlcnZpY2UgfSBmcm9tIFwiLi9saWIvc2ltcGxlLXJlbmRlci1zZXJ2aWNlLmpzXCI7XG5pbXBvcnQgeyBTaW1wbGVUYWJsZUdlbmVyYXRvciB9IGZyb20gXCIuL2xpYi9zaW1wbGUtdGFibGUtZ2VuZXJhdG9yLmpzXCI7XG5pbXBvcnQgeyBLb3JlIH0gZnJvbSBcIkBraXJpbm5lZS9jb3JlXCI7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tIFwiLi9saWIvaW50ZXJmYWNlL2NvbnZlcnRlci5qc1wiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vbGliL21haW4uanNcIjtcbmltcG9ydCB7IHN0cmluZ1RvT3B0aW9uIH0gZnJvbSBcIi4vbGliL3V0aWwuanNcIjtcbmltcG9ydCB7IENvZGVRdWFsaXR5UmVwb3J0Q29udmVydGVyIH0gZnJvbSBcIi4vbGliL2NvbnZlcnRlci9jb2RlLXF1YWxpdHktcmVwb3J0LWNvbnZlcnRlci5qc1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gXCIuL2xpYi9jb252ZXJ0ZXIvZG9jdW1lbnRhdGlvbi1jb252ZXJ0ZXIuanNcIjtcbmltcG9ydCB7IFRlc3RSZXN1bHRDb252ZXJ0ZXIgfSBmcm9tIFwiLi9saWIvY29udmVydGVyL3Rlc3QtcmVzdWx0LWNvbnZlcnRlci5qc1wiO1xuaW1wb3J0IHsgVGVzdENvdmVyYWdlQ29udmVydGVyIH0gZnJvbSBcIi4vbGliL2NvbnZlcnRlci90ZXN0LWNvdmVyYWdlLWNvbnZlcnRlci5qc1wiO1xuXG5jb25zdCBjb3JlID0gbmV3IEtvcmUoKTtcbmNvcmUuRXh0ZW5kUHJpbWl0aXZlcygpO1xuY29uc3QgbG9nID0gbmV3IEdpdGh1YkFjdGlvbkxvZ2dlcigpO1xuY29uc3QgaGlzdG9yeVZhbGlkYXRvciA9IG5ldyBab2RWYWxpZGF0b3JBZGFwdGVyKGhpc3RvcnkpO1xuY29uc3QgaGlzdG9yeUVudHJ5VmFsaWRhdG9yID0gbmV3IFpvZFZhbGlkYXRvckFkYXB0ZXIoaGlzdG9yeUVudHJ5KTtcbmNvbnN0IGlvID0gbmV3IEdpdGh1YkFjdGlvbklPKCk7XG5jb25zdCBpbnB1dCA9IG5ldyBJb0lucHV0UmV0cmlldmVyKGlvLCBoaXN0b3J5RW50cnlWYWxpZGF0b3IsIGhpc3RvcnlWYWxpZGF0b3IpO1xuY29uc3QgY29udmVydGVyczogQ29udmVydGVyW10gPSBbXG4gIG5ldyBDb2RlUXVhbGl0eVJlcG9ydENvbnZlcnRlcigpLFxuICBuZXcgRG9jdW1lbnRhdGlvbkNvbnZlcnRlcigpLFxuICBuZXcgVGVzdFJlc3VsdENvbnZlcnRlcigpLFxuICBuZXcgVGVzdENvdmVyYWdlQ29udmVydGVyKCksXG5dO1xuY29uc3QgdGFibGVHZW4gPSBuZXcgU2ltcGxlVGFibGVHZW5lcmF0b3IoY29udmVydGVycywgY29yZSk7XG5jb25zdCBzZXJ2aWNlID0gbmV3IFNpbXBsZVJlbmRlclNlcnZpY2UoY29udmVydGVycywgdGFibGVHZW4pO1xuY29uc3QgYXBwID0gbmV3IEFwcChpbnB1dCwgc2VydmljZSwgaW8pO1xuXG5hd2FpdCBhcHAucnVuKCkubWF0Y2goe1xuICBub25lOiBhc3luYyAoKSA9PiB7XG4gICAgbG9nLmluZm8oXCLinIUgU3VjY2Vzc2Z1bGx5IGV4dHJhY3RlZCBtZXRhZGF0YVwiKTtcbiAgfSxcbiAgc29tZTogYXN5bmMgKGVycnM6IEVycm9yW10pID0+IHtcbiAgICBsb2cuZXJyb3IoXCLinYwgRmFpbGVkIHRvIGV4dHJhY3QgbWV0YWRhdGFcIik7XG4gICAgZm9yIChjb25zdCBlcnIgb2YgZXJycykge1xuICAgICAgc2V0RmFpbGVkKGVycik7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHN0cmluZ1RvT3B0aW9uKGVycj8uc3RhY2spLm1hdGNoKHtcbiAgICAgICAgbm9uZTogW1wi4p2MIE5vIHN0YWNrdHJhY2UgZm91bmQhXCJdLFxuICAgICAgICBzb21lOiAoc3RhY2t0cmFjZTogc3RyaW5nKSA9PiBzdGFja3RyYWNlLnNwbGl0KFwiXFxuXCIpLFxuICAgICAgfSk7XG4gICAgICBmb3IgKGNvbnN0IG0gb2YgbWVzc2FnZXMpIHtcbiAgICAgICAgbG9nLmVycm9yKG0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pO1xuIl19
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 9483:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2037));
const utils_1 = __nccwpck_require__(2994);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 7733:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(9483);
const file_command_1 = __nccwpck_require__(8541);
const utils_1 = __nccwpck_require__(2994);
const os = __importStar(__nccwpck_require__(2037));
const path = __importStar(__nccwpck_require__(1017));
const oidc_utils_1 = __nccwpck_require__(2422);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('ENV', file_command_1.prepareKeyValueMessage(name, val));
    }
    command_1.issueCommand('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueFileCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('OUTPUT', file_command_1.prepareKeyValueMessage(name, value));
    }
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, utils_1.toCommandValue(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('STATE', file_command_1.prepareKeyValueMessage(name, value));
    }
    command_1.issueCommand('save-state', { name }, utils_1.toCommandValue(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(513);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(513);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(3084);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 8541:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(7147));
const os = __importStar(__nccwpck_require__(2037));
const uuid_1 = __nccwpck_require__(2033);
const utils_1 = __nccwpck_require__(2994);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${uuid_1.v4()}`;
    const convertedValue = utils_1.toCommandValue(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 2422:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(3569);
const auth_1 = __nccwpck_require__(6931);
const core_1 = __nccwpck_require__(7733);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 3084:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(1017));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 513:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(2037);
const fs_1 = __nccwpck_require__(7147);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 6931:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 3569:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(3685));
const https = __importStar(__nccwpck_require__(5687));
const pm = __importStar(__nccwpck_require__(2242));
const tunnel = __importStar(__nccwpck_require__(4249));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2242:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 2000:
/***/ (function(module) {

!function(t,r){if(true)module.exports=r();else { var n, e; }}("undefined"!=typeof window?window:this,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r),e.d(r,"Kore",(function(){return n})),e.d(r,"SortType",(function(){return i}));class n{constructor(){this.m=" _-,;:!?.'\"()[]{ }@*/&#%`^+<=>|~$0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"}AssertExtend(){this.IsExtended||this.t("Core needs to be extended")}get IsExtended(){return null!=Map.prototype.All}ExtendPrimitives(){let t=this;String.prototype.Match=function(t){return this.match(t)||[]},String.prototype.ReplaceAll=function(t,r,e){if(e){const e=t instanceof RegExp?t:RegExp(t,"g");return this.replace(e,r)}return this.split(t).join(r)},String.prototype.IsEmpty=function(){return 0===this.trim().length},String.prototype.Starts=function(t){if(this.IsEmpty()||t.IsEmpty())return!1;let r=t.trim();return this.trim().Take(r.length)===r},String.prototype.Ends=function(t){if(this.IsEmpty()||t.IsEmpty())return!1;let r=t.trim();return this.trim().Last(r.length)===r},String.prototype.CharAt=function(r){return(r>-1&&r>=this.length||r<0&&-r>this.length)&&t.t("Cannot exceed length of string"),this.charAt(r+(r<0?this.length:0))},String.prototype.RemoveCharAt=function(r){let e=r+(r<0?this.length:0);return(r>-1&&r>=this.length||-r>=this.length+1&&r<0)&&t.t("Cannot exceed length of string"),this.Take(e)+this.Skip(e+1)},String.prototype.Remove=function(t){return this.split(t).join("")},String.prototype.Without=function(t){let r=this;return t.Each(t=>r=r.Remove(t)),r},String.prototype.Skip=function(t){return this.substr(t)},String.prototype.Take=function(t){return null==t?0===this.length?"":this.charAt(0):this.substr(0,t)},String.prototype.Last=function(t){return null==t?0===this.length?"":this.charAt(this.length-1):this.substr(this.length-t)},String.prototype.Omit=function(t){return this.substr(0,this.length-t)},String.prototype.Repeat=function(r){return r<0&&t.t("Count cannot be negative"),this.repeat(r)},String.prototype.Count=function(t,r){if(r){const r=t instanceof RegExp?t:RegExp(t,"g");return this.Match(r).length}return this.split(t).length-1},String.prototype.Capitalize=function(){return this.Take(1).toUpperCase()+this.Skip(1)},String.prototype.CapitalizeWords=function(){return this.split(" ").Map(t=>t.Capitalize()).join(" ")},String.prototype.IsAlphanumeric=function(){if(this.IsEmpty())return!1;return null==this.split("").Map(t=>t.charCodeAt(0)).When(t=>!(t>47&&t<58||t>64&&t<91||t>96&&t<123),()=>!1)},String.prototype.IsHexadecimal=function(){if(this.IsEmpty())return!1;return parseInt(this.toLowerCase(),16).toString(16)===this.toLowerCase()},String.prototype.LineBreak=function(){return this.ReplaceAll("\r\n","\n").ReplaceAll("\r","\n").split("\n")},Number.prototype.Odd=function(){return!(!this.Int()||0===this)&&this%2!=0},Number.prototype.Even=function(){return!(!this.Int()||0===this)&&this%2==0},Number.prototype.Int=function(){return!!t.IsNumber(this)&&Math.abs(this%1)<1e-15},Number.prototype.Finite=function(){return!!t.IsAnyNumber(this)&&(!this.NaN()&&isFinite(this))},Number.prototype.Infinite=function(){return!!t.IsAnyNumber(this)&&(!this.NaN()&&!isFinite(this))},Number.prototype.NaN=function(){return isNaN(this)},Number.prototype.RoundOff=function(){t.A(this);let r=this<0?-1:1;return r*Math.round(r*this)},Number.prototype.Ceil=function(){t.A(this);let r=this<0?-1:1;return r*Math.ceil(r*this)},Number.prototype.Floor=function(){t.A(this);let r=this<0?-1:1;return r*Math.floor(r*this)},Number.prototype.Abs=function(){return t.A(this),Math.abs(this)},Number.prototype.Root=function(){return t.A(this),this<0&&t.t("Can't root negative"),Math.sqrt(this)},Number.prototype.ToInt=function(){return t.i(this)},Number.prototype.ToFloat=function(){return t.f(this)},String.prototype.ToInt=function(){return t.i(this)},String.prototype.ToFloat=function(){return t.f(this)},Number.prototype.AtMax=function(r){return t.A(this),Math.min(this,r)},Number.prototype.AtMin=function(r){return t.A(this),Math.max(this,r)},Number.prototype.Clamp=function(r,e){return t.A(this),this.AtMax(r.AtMin(e)).AtMin(r.AtMax(e))},Number.prototype.RandomTo=function(r,e){return t.A(this),e?(this+Math.random()*(r-this+1)).Floor():(this+Math.random()*(r-this+1)).AtMax(r)},Number.prototype.RandomFor=function(t,r){return this.RandomTo(this+t-1,r)},Array.prototype.Add=function(r){return this.concat(t.WrapArray(r))},Array.prototype.Flatten=function(){return 0===this.length?[]:this.Reduce((t,r)=>t.concat(r))},Array.prototype.Merge=function(t){if(this.length!==t.length)throw"Array has to be same length";let r=new Map;return this.Each((e,n)=>r.set(e,t[n])),r},Array.prototype.AsKey=function(t){let r=new Map;return this.Each((e,n)=>r.set(e,t(e,n))),r},Array.prototype.AsValue=function(t){let r=new Map;return this.Each((e,n)=>r.set(t(e,n),e)),r},Array.prototype.TrimAll=function(){return this.Map(t=>t.trim())},Array.prototype.Sort=function(r,e){let n=this.slice();null==e&&(r.IsNum&&!t.IsNumberArray(n)||!t.IsStringArray(n)&&!r.IsNum)&&t.t("Please provide scoring strategy"),null==e&&(e=t=>t);let i=r.Reverse?-1:1;return n.sort((n,o)=>(r.IsNum?e(n)>e(o)?1:-1:t.lc(e(n),e(o)))*i),n},Array.prototype.Reverse=function(){let t=[];return this.Each(r=>t.push(r),!0),t},Array.prototype.Has=function(r,e=!1){return this.When(n=>t.Eq(n,r,e),()=>!0)||!1},Array.prototype.Where=function(t){let r=[];return this.When(t,t=>{r.push(t)},!1),r},Array.prototype.Map=function(t){let r=[];return this.Each((e,n)=>r.push(t(e,n))),r},Array.prototype.Each=function(t,r=!1){if(!r){for(let r=0;r<this.length;r++)t(this[r],r);return this}for(let r=this.length-1;r>=0;r--)t(this[r],r);return this},Array.prototype.RemoveValue=function(r,e=!1){return this.Where(n=>!t.Eq(n,r,e))},Array.prototype.Without=function(t,r=!1){return this.Where(e=>!t.Has(e,r))},Array.prototype.WithoutIndex=function(t){return this.Where((r,e)=>!t.Has(e))},Array.prototype.Fill=function(t,r){let e=this.slice();for(let n=0;n<t;n++)e.push(r(n));return e},Array.prototype.RemoveIndex=function(t){return this.Where((r,e)=>e!==t)},Array.prototype.Take=function(t){return null==t?0===this.length?null:this[0]:this.slice(0,t)},Array.prototype.TakeWhile=function(t){let r=[];return this.When(t,t=>{r.push(t)},!0),r},Array.prototype.Skip=function(t){return this.slice(t)},Array.prototype.SkipWhile=function(t){let r=0;return this.When(t,()=>{r++},!0),this.Skip(r)},Array.prototype.Omit=function(t){return this.slice(0,-t)},Array.prototype.OmitWhile=function(t){let r=0;return this.Reverse().When(t,()=>{r++},!0),this.Omit(r)},Array.prototype.Last=function(t){if(null==t)return 0===this.length?null:this[this.length-1];let r=this.length-t;return this.slice(r>0?r:0)},Array.prototype.LastWhile=function(t){let r=0;return this.Reverse().When(t,()=>{r++},!0),this.Last(r)},Array.prototype.FirstIndexOf=function(r,e=!1){return this.FindIndex(n=>t.Eq(n,r,e))},Array.prototype.Count=function(r,e=!1){return this.Where(n=>t.Eq(n,r,e)).length},Array.prototype.Indexes=function(r,e=!1){let n=[];return this.When(n=>t.Eq(n,r,e),(t,r)=>{n.push(r)}),n},Array.prototype.Unique=function(t=!1){return this.Where((r,e)=>this.FirstIndexOf(r,t)===e)},Array.prototype.Union=function(t,r=!1){return this.concat(t).Unique(r)},Array.prototype.Intersect=function(t,r=!1){return this.Unique(r).Where(e=>t.Has(e,r))},Array.prototype.Outer=function(t,r=!1){return this.Union(t,r).Without(this.Intersect(t,r),r)},Array.prototype.Max=function(t=((t,r)=>t)){return this.Reverse().Reduce((r,e,n)=>t(r,n-1)>t(e,n)?r:e)},Array.prototype.Min=function(t=((t,r)=>t)){return this.Reverse().Reduce((r,e,n)=>t(r,n-1)<t(e,n)?r:e)},Array.prototype.Sum=function(t=(t=>t)){return this.Map((r,e)=>t(r,e)).Reduce((t,r)=>t+r)},Array.prototype.Reduce=function(r){if(0===this.length&&t.t("Empty Array"),1===this.length)return this[0];let e=this[0];for(let t=1;t<this.length;t++)e=r(e,this[t],t-1);return e},Array.prototype.Find=function(t){let r=this.When(t,t=>t);return null==r?null:r},Array.prototype.FindIndex=function(t){let r=this.When(t,(t,r)=>r);return null==r?null:r},Array.prototype.Any=function(t){return this.When(t,()=>!0)||!1},Array.prototype.All=function(t){return!this.Any((r,e)=>!t(r,e))},Array.prototype.When=function(t,r,e=!1){for(let n=0;n<this.length;n++)if(t(this[n],n)){let t=r(this[n],n);if(void 0!==t)return t}else if(e)break},Array.prototype.Random=function(){return 0===this.length?null:1===this.length?this[0]:this[(0).RandomFor(this.length,!0)]},Map.prototype.TrimValue=function(){return this.MapValue(t=>t.trim())},Map.prototype.SortByKey=function(t,r){let e=this.Arr();return e=e.Sort(t,null==r?t=>t[0]:t=>r(t[0])),new Map(e)},Map.prototype.SortByValue=function(t,r){let e=this.Arr();return e=e.Sort(t,null==r?t=>t[1]:t=>r(t[1])),new Map(e)},Map.prototype.Reverse=function(){return new Map(this.Arr().Reverse())},Map.prototype.HasKey=function(t,r){return this.Keys().Has(t,r)},Map.prototype.HasValue=function(t,r){return this.Values().Has(t,r)},Map.prototype.Where=function(r){return new Map(this.Arr().Where(e=>t.M(e,r)))},Map.prototype.MapKey=function(t){let r=new Map;return this.Each((e,n)=>r.set(t(e,n),n)),r},Map.prototype.MapValue=function(t){let r=new Map;return this.Each((e,n)=>r.set(e,t(n,e))),r},Map.prototype.Map=function(t){let r=[];return this.Each((e,n)=>r.push(t(e,n))),r},Map.prototype.Each=function(t){let r=new Map;return this.Arr().Each(e=>{t(e[0],e[1]),r.set(e[0],e[1])}),r},Map.prototype.RemoveKey=function(r,e=!1){return this.Where(n=>!t.Eq(r,n,e))},Map.prototype.RemoveValue=function(r,e=!1){return this.Where((n,i)=>!t.Eq(i,r,e))},Map.prototype.Without=function(t,r,e=!1){return this.Where((n,i)=>!t.Has(n,e)&&!r.Has(i,e))},Map.prototype.Take=function(r){if(null==r){let r=this.Arr().Take();return null==r?null:t.P(r)}return new Map(this.Arr().Take(r))},Map.prototype.TakeWhile=function(r){return new Map(this.Arr().TakeWhile(e=>t.M(e,r)))},Map.prototype.Skip=function(t){return new Map(this.Arr().Skip(t))},Map.prototype.SkipWhile=function(r){return new Map(this.Arr().SkipWhile(e=>t.M(e,r)))},Map.prototype.Omit=function(t){return new Map(this.Arr().Omit(t))},Map.prototype.OmitWhile=function(r){return new Map(this.Arr().OmitWhile(e=>t.M(e,r)))},Map.prototype.Last=function(r){if(null==r){let r=this.Arr().Last();return null==r?null:t.P(r)}return new Map(this.Arr().Last(r))},Map.prototype.LastWhile=function(r){return new Map(this.Arr().LastWhile(e=>t.M(e,r)))},Map.prototype.Arr=function(){return Array.from(this.entries())},Map.prototype.Keys=function(){return Array.from(this.keys())},Map.prototype.Values=function(){return Array.from(this.values())},Map.prototype.Find=function(r){let e=this.Arr().Find(e=>t.M(e,r));return null==e?null:t.P(e)},Map.prototype.Max=function(r){return t.P(this.Arr().Max(t=>r(t[0],t[1])))},Map.prototype.Min=function(r){return t.P(this.Arr().Min(t=>r(t[0],t[1])))},Map.prototype.Sum=function(t){return this.Arr().Sum(r=>t(r[0],r[1]))},Map.prototype.Reduce=function(r){return this.Arr().Map(r=>t.P(r)).Reduce(r)},Map.prototype.Any=function(r){return this.Arr().Any(e=>t.M(e,r))},Map.prototype.All=function(r){return this.Arr().All(e=>t.M(e,r))},Map.prototype.AsObject=function(){let r={};return this.Each((e,n)=>{let i=e.split(".");t.SV(r,i,n)}),r}}DeepEqual(t,r){let e=this;if(t===r)return!0;if(void 0===t||void 0===r)return!1;if(null===t||null===r)return!1;if(typeof t!=typeof r)return!1;if(e.TC(t,r,"string"))return t+""==r+"";if(e.TC(t,r,"number"))return isNaN(t)?isNaN(r):t===r;if(e.TC(t,r,"boolean"))return t===r;if(t instanceof Date)return t.valueOf()===r.valueOf();if(t.constructor!==r.constructor)return!1;if(t instanceof Function||t instanceof RegExp)return t.toString()===r.toString();if(this.IsArray(t)){if(!this.IsArray(r))return!1;if(t.length!==r.length)return!1}const n=Object.keys(t);return Object.keys(r).every(t=>-1!==n.indexOf(t))&&n.every((function(n){return e.Eq(t[n],r[n],!0)}))}IsAnyString(t){return"string"==typeof t||t instanceof String}IsString(t){if(!this.IsAnyString(t))return!1;return""!==t.trim()}IsAnyNumber(t){return null!=t&&("number"==typeof t||t instanceof Number)}IsNumber(t,r=!1){if(this.IsAnyNumber(t))return!isNaN(t)&&isFinite(t);if(this.IsAnyString(t)&&r){let r=parseFloat(t);return!isNaN(r)&&isFinite(r)}return!1}IsArray(t){return Array.isArray(t)}IsBooleanArray(t){return this.I(t,"boolean")}IsNumberArray(t){return this.I(t,"number")}IsStringArray(t){return this.I(t,"string")}Random(t){let r=this.m.Skip(34).split("");return[].Fill(t,()=>r.Random()).join("")}WrapArray(t){return this.IsArray(t)?t:[t]}Eq(t,r,e){return e?this.DeepEqual(t,r):t===r}FlattenObject(t){return this.FO(t)}FlattenClass(t,r){return this.VO(t,"",r)}VO(t,r="",e){let n=new Map;for(let i in t)if(t.hasOwnProperty(i)){let o=t[i];this.TO(o,"object")?o.constructor==e?n.set(r+i,o):n=new Map(n.Arr().Union(this.VO(o,r+i+".",e).Arr(),!0)):this.t("Needs to be object")}return n}FO(t,r=""){let e=new Map;for(let n in t)if(t.hasOwnProperty(n)){let i=t[n];this.NO(i)?e.set(r+n,i):e=new Map(e.Arr().Union(this.FO(i,r+n+".").Arr(),!0))}return e}I(t,r){return this.IsArray(t)&&t.every(t=>typeof t===r)}NO(t){return this.IsArray(t)||t instanceof RegExp||t instanceof Date||!this.TO(t,"object")||this.TO(t,"function")}TO(t,r){return typeof t===r}SV(t,r,e){let n=r[0];1===r.length?t[n]=e:(this.TO(t[n],"undefined")&&(t[n]={}),this.SV(t[n],r.Skip(1),e))}t(t){throw Error(t)}lc(t,r){let e="",n="",i=0,o=t.length===r.length;for(;e===n&&i<100;)e=(o?t:t.toLowerCase()).charAt(i),n=(o?r:r.toLowerCase()).charAt(i),i++;return(this.m.indexOf(e)-this.m.indexOf(n)).Clamp(-1,1)}TC(t,r,e){return typeof t===e&&typeof r===e}M(t,r){return r(t[0],t[1])}P(t){return{key:t[0],value:t[1]}}i(t){return this.A(t),this.IsAnyString(t)?parseInt(t):Math.trunc(t)}f(t){return this.A(t),parseFloat(t)}A(t){this.IsNumber(t,!0)||this.t("Invalid Number")}}class i{constructor(){this.Ascending={IsNum:!0,Reverse:!1},this.Descending={IsNum:!0,Reverse:!0},this.AtoZ={IsNum:!1,Reverse:!1},this.ZtoA={IsNum:!1,Reverse:!0}}}i.Ascending={IsNum:!0,Reverse:!1},i.Descending={IsNum:!0,Reverse:!0},i.AtoZ={IsNum:!1,Reverse:!1},i.ZtoA={IsNum:!1,Reverse:!0}}])}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4249:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(709);


/***/ }),

/***/ 709:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1808);
var tls = __nccwpck_require__(4404);
var http = __nccwpck_require__(3685);
var https = __nccwpck_require__(5687);
var events = __nccwpck_require__(2361);
var assert = __nccwpck_require__(9491);
var util = __nccwpck_require__(3837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 2033:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function () {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function () {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function () {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function () {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function () {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function () {
    return _version.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function () {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function () {
    return _parse.default;
  }
}));

var _v = _interopRequireDefault(__nccwpck_require__(9370));

var _v2 = _interopRequireDefault(__nccwpck_require__(8638));

var _v3 = _interopRequireDefault(__nccwpck_require__(3519));

var _v4 = _interopRequireDefault(__nccwpck_require__(8239));

var _nil = _interopRequireDefault(__nccwpck_require__(680));

var _version = _interopRequireDefault(__nccwpck_require__(3609));

var _validate = _interopRequireDefault(__nccwpck_require__(6009));

var _stringify = _interopRequireDefault(__nccwpck_require__(9729));

var _parse = _interopRequireDefault(__nccwpck_require__(8951));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 7276:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 680:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 8951:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6009));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 7548:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ 3557:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6009));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 9370:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(7548));

var _stringify = _interopRequireDefault(__nccwpck_require__(9729));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 8638:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(6694));

var _md = _interopRequireDefault(__nccwpck_require__(7276));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 6694:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__nccwpck_require__(9729));

var _parse = _interopRequireDefault(__nccwpck_require__(8951));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 3519:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(7548));

var _stringify = _interopRequireDefault(__nccwpck_require__(9729));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 8239:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(6694));

var _sha = _interopRequireDefault(__nccwpck_require__(3557));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 6009:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__nccwpck_require__(646));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 3609:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6009));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 4404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__nccwpck_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(5824);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map