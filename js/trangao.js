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
        img1:"../images/imageBack/aosomi/mslandslimfit1415.jpg",
        img2:"../images/imageBack/aosomi/Britishclassics1426.jpg"
    };
    
    //create function setAttribute 
    function setAttr(imgArr,imgIndex){
        return imgArr.setAttribute('src',imgIndex);
    }
    // process hover change img
    for (let i = 0; i < arrImg.length; i++) {
        arrImg[i].onmouseover = () => {
            for (const key in changImg) {
                if (arrImg[i].getAttribute('src').slice(-20)==changImg[key].slice(-20)) //compare 20 last string 
                {
                    setAttr(arrImg[i], changImg[key]);
                }
            }
        };
        arrImg[i].onmouseout = () => {
            for (const key in backImg) {
                if (arrImg[i].getAttribute('src').slice(-20)==backImg[key].slice(-20)) {
                    setAttr(arrImg[i], backImg[key]);
                }
            }

        };
        
    }
});


