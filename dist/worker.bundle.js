!function(n){var e={};function a(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},a.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/dist/",a(a.s=18)}({18:function(n,e,a){"use strict";a.r(e);var t=a(4);async function i(){"undefined"==typeof Binaryen&&importScripts("../lib/binaryen.js")}async function r(){"undefined"==typeof wabt&&(self.global=self,importScripts("../lib/libwabt.js"))}function s(n){i();const e=Binaryen.readBinary(new Uint8Array(n));return e.optimize(),e.emitBinary()}function o(n){return i(),Binaryen.readBinary(new Uint8Array(n)).validate()}function m(n){i();const e=Binaryen.readBinary(new Uint8Array(n)),a=Binaryen.print;let t="";return Binaryen.print=(n=>{t+=n+"\n"}),e.runPasses(["print-call-graph"]),Binaryen.print=a,t}function u(n){i();const e=Binaryen.readBinary(new Uint8Array(n));return e.optimize(),e.emitAsmjs()}function l(n){return i(),Binaryen.readBinary(new Uint8Array(n)).emitText()}function y(n){return i(),Binaryen.parseText(n).emitBinary()}function W(n){r();const e=wabt.readWasm(n,{readDebugNames:!0});return e.generateNames(),e.applyNames(),e.toText({foldExprs:!1,inlineExport:!0})}function c(n){r();const e=wabt.parseWat("test.wat",n);return e.resolveNames(),e.validate(),e.toBinary({log:!0,write_debug_names:!0}).buffer}onmessage=(n=>{const e={[t.a.OptimizeWasmWithBinaryen]:s,[t.a.ValidateWasmWithBinaryen]:o,[t.a.CreateWasmCallGraphWithBinaryen]:m,[t.a.ConvertWasmToAsmWithBinaryen]:u,[t.a.DisassembleWasmWithBinaryen]:l,[t.a.AssembleWatWithBinaryen]:y,[t.a.DisassembleWasmWithWabt]:W,[t.a.AssembleWatWithWabt]:c}[n.data.command];!function(n,e){if(!n)throw new Error(e)}(e,`Command ${n.data.command} not found.`),function(n,e){const a={id:n.id,payload:null,success:!0};try{a.payload=e(n.payload)}catch(n){a.payload={message:n.message},a.success=!1}postMessage(a,void 0)}(n.data,e)})},4:function(n,e,a){"use strict";var t;a.d(e,"a",function(){return t}),function(n){n[n.OptimizeWasmWithBinaryen=0]="OptimizeWasmWithBinaryen",n[n.ValidateWasmWithBinaryen=1]="ValidateWasmWithBinaryen",n[n.CreateWasmCallGraphWithBinaryen=2]="CreateWasmCallGraphWithBinaryen",n[n.ConvertWasmToAsmWithBinaryen=3]="ConvertWasmToAsmWithBinaryen",n[n.DisassembleWasmWithBinaryen=4]="DisassembleWasmWithBinaryen",n[n.AssembleWatWithBinaryen=5]="AssembleWatWithBinaryen",n[n.DisassembleWasmWithWabt=6]="DisassembleWasmWithWabt",n[n.AssembleWatWithWabt=7]="AssembleWatWithWabt"}(t||(t={}))}});
//# sourceMappingURL=worker.bundle.js.map