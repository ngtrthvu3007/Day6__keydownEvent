
var box = document.querySelector('.box')
var eKey = document.querySelector('.box__card.key p:last-child');
var eLocation = document.querySelector('.box__card.location p:last-child');
var eWhich = document.querySelector('.box__card.which p:last-child');
var eCode = document.querySelector('.box__card.code p:last-child');


document.addEventListener('keydown', e=>{
    let keyName = e.keyCode === 32 ? 'Space' : e.key;

    document.querySelector('.box__circle').innerText = e.which;

    eKey.innerText = keyName;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    


    document.querySelector('.alert').classList.add('hide');
    box.classList.remove('hide');
})