// footer zipper

const arrow1 = document.getElementById('arrow-1');
const arrow2 = document.getElementById('arrow-2');

const menuAccount = document.getElementById('expand-account');
const menuInfo = document.getElementById('expand-info');

arrow1.addEventListener('click', () => {
  menuAccount.classList.toggle('desktop');
});
arrow2.addEventListener('click', () => {
  menuInfo.classList.toggle('desktop');
});