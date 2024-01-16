"use strick"
document.addEventListener('DOMContentLoaded',()=>{
    let notifyCont = document.getElementById('containerForNotification');
    let notifyCont1 = document.getElementById('containerForNotification1');
    let notifyCont2 = document.getElementById('containerForNotification2');
    let notifyCont3 = document.getElementById('containerForNotification3');
    let notifyCont4 = document.getElementById('containerForNotification4');
    let notifyCont5 = document.getElementById('containerForNotification5');
    let notifyCont6 = document.getElementById('containerForNotification6');
    let notifications_container = [notifyCont,notifyCont1,notifyCont2,notifyCont3,notifyCont4,notifyCont5,notifyCont6];
    let redDots = document.querySelectorAll('.redDot');
    let _userName = document.querySelectorAll('._userName');
    let markAs = document.getElementById('markAs')
    let numOfNotify = document.getElementById('numberOFNotifications')

    // this for each element change
    for (let i = 0; i < _userName.length; i++) {
        const element = _userName[i];
        let counter = i ;
        numOfNotify.innerHTML='7';
        element.addEventListener('click',()=>{
          let con =  notifications_container[i];
          let red =  redDots[i];
          con.style.backgroundColor="white"
          red.classList.add('d-none')
          let currentNum = parseInt(numOfNotify.innerHTML, 10);
          if (currentNum > 0) {
            numOfNotify.innerHTML = (currentNum - 1).toString();
        }
        })

    }
    // this for all elements change
    markAs.addEventListener('click',()=>{
    notifications_container.forEach((e)=>{
    e.style.backgroundColor="white"
    })
    redDots.forEach((e)=>{
    e.classList.add('d-none')
    })
    numOfNotify.innerHTML='0';
    })
});
  

