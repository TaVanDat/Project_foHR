document.addEventListener("DOMContentLoaded",()=>{
    var arrImg = Array.from(document.querySelectorAll("div .img-h img"));
    //  object chang img
    var backImg = {
        img1: "../images/AoSoMi/mslandslimfit1415.jpg",
        img2:"../images/AoSoMi/Britishclassics1426.jpg",
        img3:"../images/AoSoMi/SimwoodDenimblue.jpg",
        img4:"../images/AoSoMi/CocBentino.jpg" ,
        img5:"../images/AoSoMi/Easyclean.jpg",
        img6:"../images/AoPolo/poloPaul.jpg",
        img7:"../images/AoPolo/phongPolo.jpg",
        img8:"../images/AoPolo/poloH2T.jpg",
        img9:"../images/sale/poloAT.jpg",
        img10:"../images/AoPolo/poloH2TAP.jpg",
        img11:"../images/aothun/aothunGAIETY.jpg",
        img12:"../images/aothun/aothunPrinted.jpg",
        img13:"../images/aothun/aothunStriped.jpg",
        img14:"../images/aothun/aothunToTheNorth.jpg",
        img15:"../images/aothun/aothunSw91.jpg",
        img16:"../images/AoBaLo/tanktop1440.jpg",
        img17:"../images/AoBaLo/tanktop1439.jpg",
        img18:"../images/AoBaLo/PrintedSymmetries1444.jpg",
        img19:"../images/aothun/aothunKDphoiMau.jpg",
        img20:"../images/aothun/aothunSportShirt.jpg"

    };
    // object back img
    var changImg = {
        img1:"../images/AoSoMi/mslandslimfit14155.jpg",
        img2:"../images/AoSoMi/Britishclassics14266.jpg",

        
    };
    // create class have attr position
    
    // process hover change img
    for (let i = 0; i < arrImg.length; i++) {
        arrImg[i].onmouseover = () => {
            if (arrImg[i].getAttribute('src')==backImg.img1) {
                arrImg[i].setAttribute('src',changImg.img1);
            }
            else if (arrImg[i].getAttribute('src')==backImg.img2) {
                arrImg[i].setAttribute('src',changImg.img2);
            }
            
        };
        arrImg[i].onmouseout = () => {
            if (arrImg[i].getAttribute('src')==changImg.img1) {
                arrImg[i].setAttribute('src',backImg.img1);
            }
            if (arrImg[i].getAttribute('src')==changImg.img2) {
                arrImg[i].setAttribute('src',backImg.img2);
            }

        };
        
    }
});


// function changeImg(x){
//     x.src = "../images/AoSoMi/mslandslimfit14155.jpg";
//     x.style.height ='250px';
//     x.style.width = '230px';
// }
// function backImg(x){
//     x.src = "../images/AoSoMi/mslandslimfit1415.jpg";
//     x.style.height ='250px';
//     x.style.width = '230px';
// }


