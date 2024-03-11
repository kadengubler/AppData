var mod=(()=>{var g=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var G=Object.prototype.hasOwnProperty;var u=(e,t)=>{for(var o in t)g(e,o,{get:t[o],enumerable:!0})},O=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of K(t))!G.call(e,i)&&i!==o&&g(e,i,{get:()=>t[i],enumerable:!(n=R(t,i))||n.enumerable});return e};var q=e=>O(g({},"__esModule",{value:!0}),e);var et={};u(et,{functionMapping:()=>D});typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var h=new Map,y=0;function f(e){self.postMessage(e)}self.syscall=async(e,...t)=>await new Promise((o,n)=>{y++,h.set(y,{resolve:o,reject:n}),f({type:"sys",id:y,name:e,args:t})});function v(e,t){self.addEventListener("message",o=>{(async()=>{let n=o.data;switch(n.type){case"inv":{let i=e[n.name];if(!i)throw new Error(`Function not loaded: ${n.name}`);try{let c=await Promise.resolve(i(...n.args||[]));f({type:"invr",id:n.id,result:c})}catch(c){console.error("An exception was thrown as a result of invoking function",n.name,"error:",c),f({type:"invr",id:n.id,error:c.message})}}break;case"sysr":{let i=n.id,c=h.get(i);if(!c)throw Error("Invalid request id");h.delete(i),n.error?c.reject(new Error(n.error)):c.resolve(n.result)}break}})().catch(console.error)}),f({type:"manifest",manifest:t})}function L(e){let t=atob(e),o=t.length,n=new Uint8Array(o);for(let i=0;i<o;i++)n[i]=t.charCodeAt(i);return n}function C(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let t="",o=e.byteLength;for(let n=0;n<o;n++)t+=String.fromCharCode(e[n]);return btoa(t)}async function B(e,t){if(typeof e!="string"){let o=new Uint8Array(await e.arrayBuffer()),n=o.length>0?C(o):void 0;t={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:n},e=e.url}return syscall("sandboxFetch.fetch",e,t)}function j(){globalThis.nativeFetch=globalThis.fetch,globalThis.fetch=async function(e,t){let o=t&&t.body?C(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,n=await B(e,t&&{method:t.method,headers:t.headers,base64Body:o});return new Response(n.base64Body?L(n.base64Body):null,{status:n.status,headers:n.headers})}}j();var s={};u(s,{confirm:()=>me,dispatch:()=>le,downloadFile:()=>Z,filterBox:()=>re,flashNotification:()=>te,fold:()=>ge,foldAll:()=>Pe,getCurrentPage:()=>Y,getCursor:()=>W,getSelection:()=>Q,getText:()=>I,getUiOption:()=>de,hidePanel:()=>oe,insertAtCursor:()=>ce,insertAtPos:()=>ie,moveCursor:()=>ae,navigate:()=>z,openUrl:()=>X,prompt:()=>ue,reloadPage:()=>H,reloadUI:()=>J,replaceRange:()=>se,save:()=>V,setPage:()=>$,setSelection:()=>_,setUiOption:()=>fe,showPanel:()=>ne,toggleFold:()=>he,unfold:()=>ye,unfoldAll:()=>xe,uploadFile:()=>ee,vimEx:()=>pe});typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});var r=self.syscall;function Y(){return r("editor.getCurrentPage")}function $(e){return r("editor.setPage",e)}function I(){return r("editor.getText")}function W(){return r("editor.getCursor")}function Q(){return r("editor.getSelection")}function _(e,t){return r("editor.setSelection",e,t)}function V(){return r("editor.save")}function z(e,t,o=!1,n=!1){return r("editor.navigate",e,t,o,n)}function H(){return r("editor.reloadPage")}function J(){return r("editor.reloadUI")}function X(e,t=!1){return r("editor.openUrl",e,t)}function Z(e,t){return r("editor.downloadFile",e,t)}function ee(e,t){return r("editor.uploadFile",e,t)}function te(e,t="info"){return r("editor.flashNotification",e,t)}function re(e,t,o="",n=""){return r("editor.filterBox",e,t,o,n)}function ne(e,t,o,n=""){return r("editor.showPanel",e,t,o,n)}function oe(e){return r("editor.hidePanel",e)}function ie(e,t){return r("editor.insertAtPos",e,t)}function se(e,t,o){return r("editor.replaceRange",e,t,o)}function ae(e,t=!1){return r("editor.moveCursor",e,t)}function ce(e){return r("editor.insertAtCursor",e)}function le(e){return r("editor.dispatch",e)}function ue(e,t=""){return r("editor.prompt",e,t)}function me(e){return r("editor.confirm",e)}function de(e){return r("editor.getUiOption",e)}function fe(e,t){return r("editor.setUiOption",e,t)}function pe(e){return r("editor.vimEx",e)}function ge(){return r("editor.fold")}function ye(){return r("editor.unfold")}function he(){return r("editor.toggleFold")}function Pe(){return r("editor.foldAll")}function xe(){return r("editor.unfoldAll")}var p={};u(p,{parseMarkdown:()=>we});function we(e){return r("markdown.parseMarkdown",e)}var m={};u(m,{deleteAttachment:()=>Ne,deleteFile:()=>Ge,deletePage:()=>Ae,getAttachmentMeta:()=>ke,getFileMeta:()=>Re,getPageMeta:()=>Te,listAttachments:()=>Me,listFiles:()=>Ee,listPages:()=>be,listPlugs:()=>Se,readAttachment:()=>Fe,readFile:()=>De,readPage:()=>ve,writeAttachment:()=>Ue,writeFile:()=>Ke,writePage:()=>Ce});function be(e=!1){return r("space.listPages",e)}function Te(e){return r("space.getPageMeta",e)}function ve(e){return r("space.readPage",e)}function Ce(e,t){return r("space.writePage",e,t)}function Ae(e){return r("space.deletePage",e)}function Se(){return r("space.listPlugs")}function Me(){return r("space.listAttachments")}function ke(e){return r("space.getAttachmentMeta",e)}function Fe(e){return r("space.readAttachment",e)}function Ue(e,t){return r("space.writeAttachment",e,t)}function Ne(e){return r("space.deleteAttachment",e)}function Ee(){return r("space.listFiles")}function De(e){return r("space.readFile",e)}function Re(e){return r("space.getFileMeta",e)}function Ke(e,t){return r("space.writeFile",e,t)}function Ge(e){return r("space.deleteFile",e)}var l=globalThis.syscall;var a={};u(a,{run:()=>Qe});function Qe(e,t){return l("shell.run",e,t)}var d={};u(d,{parse:()=>_e,stringify:()=>Ve});function _e(e){return l("yaml.parse",e)}function Ve(e){return l("yaml.stringify",e)}function P(e,t){if(t(e))return[e];let o=[];if(e.children)for(let n of e.children)o=[...o,...P(n,t)];return o}function x(e,t){return P(e,o=>o.type===t)[0]}function A(e,t){P(e,t)}async function Je(e,t){let o=await m.readPage(e),n=await p.parseMarkdown(o),i;return A(n,c=>{if(c.type!=="FencedCode")return!1;let b=x(c,"CodeInfo");if(t&&!b||t&&!t.includes(b.children[0].text))return!1;let T=x(c,"CodeText");return T?(i=T.children[0].text,!0):!1}),i}async function S(e,t=["yaml"]){let o=await Je(e,t);if(o!==void 0)try{return d.parse(o)}catch(n){throw console.error("YAML Page parser error",n),new Error(`YAML Error: ${n.message}`)}}var Xe="SETTINGS";async function M(e,t){try{let n=(await S(Xe,["yaml"])||{})[e];return n===void 0?t:n}catch(o){if(o.message==="Not found")return t;throw o}}async function w(e){e||(e="Snapshot"),console.log("Snapshotting the current space to git with commit message",e);let{code:t}=await a.run("git",["add","./*"]);console.log("Git add code",t);try{await a.run("git",["commit","-a","-m",e])}catch{}console.log("Done!")}async function k(){let e=await s.prompt("Revision name:");e||(e="Snapshot"),console.log("Revision name",e),await w(e),await s.flashNotification("Done!")}async function F(){await s.flashNotification("Syncing with git"),await U(),await s.flashNotification("Git sync complete!")}async function U(){console.log("Going to sync with git"),await w(),console.log("Then pulling from remote"),await a.run("git",["pull"]),console.log("And then pushing to remote"),await a.run("git",["push"]),console.log("Done!")}async function N(){let e=await s.prompt("Github project URL:");if(!e)return;let t=await s.prompt("Github token:");if(!t)return;let o=await s.prompt("Your name:");if(!o)return;let n=await s.prompt("Your email:");if(!n)return;let i=e.split("/");i[2]=`${t}@${i[2]}`,e=i.join("/")+".git",await s.flashNotification("Now going to clone the project, this may take some time."),await a.run("mkdir",["-p","_checkout"]),await a.run("git",["clone",e,"_checkout"]),await a.run("bash",["-c","mv -f _checkout/{.,}* . 2> /dev/null; true"]),await a.run("rm",["-rf","_checkout"]),await a.run("git",["config","user.name",o]),await a.run("git",["config","user.email",n]),await s.flashNotification("Done. Now just wait for sync to kick in to get all the content.")}async function E(){let e=await M("git",{});e.autoCommitMinutes&&(console.log("Triggered auto commit"),new Date().getMinutes()%e.autoCommitMinutes===0&&(console.log("Auto commit time!"),e.autoSync?await U():await w("Auto commit")))}var D={autoCommit:E,githubCloneCommand:N,snapshotCommand:k,syncCommand:F},Ze={name:"git",requiredPermissions:["shell"],functions:{autoCommit:{path:"git.ts:autoCommit",env:"server",cron:"* * * * *"},githubCloneCommand:{path:"./git.ts:githubCloneCommand",command:{name:"Github: Clone"}},snapshotCommand:{path:"./git.ts:snapshotCommand",command:{name:"Git: Snapshot"}},syncCommand:{path:"./git.ts:syncCommand",command:{name:"Git: Sync"}}},assets:{}};v(D,Ze);return q(et);})();
