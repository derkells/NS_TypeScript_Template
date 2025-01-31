/**
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.afterSubmit = afterSubmit;
    function afterSubmit(context) {
        log.debug("afterSubmit(context):", context);
    }
});
