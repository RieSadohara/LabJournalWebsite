function OnLoadReady(fn) {
  if (document.readyState != 'loading'){ fn(); //console.log("loading")
  }else {   document.addEventListener('DOMContentLoaded', fn); }
};

OnLoadReady(function(){
  document.querySelector('.md-sidebar-toc').style.backgroundColor = "var(--main-background)";
  document.querySelector('#sidebar-toc-btn').style.color = "var(--btn_color)"; 
});
