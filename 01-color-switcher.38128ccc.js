!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.querySelector("body"),o=null,c=!1;t.addEventListener("click",(function(){c||(c=!0,o=setInterval((function(){e.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3))})),n.addEventListener("click",(function(){c=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.38128ccc.js.map
