var btn = document.getElementsByClassName('btn');
var sezPhase = document.getElementsById('sezPhase');

btn.addEventListener('click', viewLink);

function viewLink(){
    sezPhase.style.display='block';
    btn.style.display='none';
}