
const iframe = document.getElementById('myIframe');

iframe.onload = function() {
  console.log('true'); 
};

iframe.onerror = function() {
  console.log('false'); 
};
    