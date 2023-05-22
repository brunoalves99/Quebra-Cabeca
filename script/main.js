const btns = document.querySelectorAll('button');
let btnNumber = [1,2,3,4,5,6,7,8,9,10,11,12];
let vezes = 12;


let randomImgNumber = Math.round(Math.random() * 4);
let RandomImg = `./img/img${randomImgNumber + 1}.jpg`;

// Gera os pedaços da imagem aleatoriamente
btns.forEach((btn) => {
    let randomNumber = Math.floor(Math.random() * vezes);
    btn.classList.add(`btn${btnNumber[randomNumber]}`);
    btnNumber.splice(randomNumber, 1);
    vezes--;

    // Adicionando uma imagem aleatoria
    btn.querySelector('img').src = RandomImg;
});

let classBtn1 = "";
let classBtn2 = "";

let firstElement;
let unicaClass = "";

btns.forEach((button) => {
    button.addEventListener('click', (btn) => {
        let classBtn = btn.target.parentElement.className.split(" ");

        if(classBtn1 == "") {
            classBtn1 = classBtn[1];
            firstElement = btn.target.parentElement;
            unicaClass = classBtn[0];
        }
        else if (classBtn1 != "" && classBtn2 == "") {
            classBtn2 = classBtn[1];
            let btnClass = btn.target.parentElement.className.split(" ");
            
            firstElement.className = unicaClass;
            firstElement.classList.add(btnClass[1]);
            
            btn.target.parentElement.className = btnClass[0];
            btn.target.parentElement.classList.add(classBtn1);
        
            classBtn1 = "";
            classBtn2 = "";

            firstElement = "";
            unicaClass = "";

            let pontos = 0;

            btns.forEach((btn) => {

                let imgArr = btn.className.split(" ");
                let imgRemove = imgArr[0].substring(0,3);
                let imgNum = imgArr[0].replace(imgRemove, "");

                let btnArr = btn.className.split(" ");
                let btnRemove = btnArr[1].substring(0,3);
                let btnNum = btnArr[1].replace(btnRemove, "");

                if(imgNum == btnNum) {
                    pontos++;
                    if(pontos >= 12) {

                        let h1 = document.createElement("h1");
                        h1.innerText = "Parabéns, você conseguiu!"

                        let btnReload = document.createElement("button");
                        btnReload.className = "btnReload";
                        btnReload.innerText = "Jogar novamente";

                        document.querySelector('.win').appendChild(h1);
                        document.body.appendChild(btnReload);
                        
                        btnReload.addEventListener('click', () => location.reload());


                        pontos = 0;
                    }
                }
            });
        }
    });
});