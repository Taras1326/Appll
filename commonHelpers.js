(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();document.querySelectorAll(".faq__item");document.addEventListener("click",function(o){if(o.target.className!=="faq__button")return;event.target.closest(".faq__item").classList.toggle("hide")});(()=>{const o={openModalBtn:document.querySelector("[data-modal-nc-open]"),closeModalBtn:document.querySelector("[data-modal-nc-close]"),modal:document.querySelector("[data-nc-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
//# sourceMappingURL=commonHelpers.js.map
