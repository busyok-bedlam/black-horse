(() => {
    let arrayOfImgLinks = [
        './img/header.png',
        'https://picsum.photos/1921/1041?image1',
        'https://picsum.photos/1921/1041?image2',
        'https://picsum.photos/1921/1041?image11',
        'https://picsum.photos/1921/1041?image12',
        'https://picsum.photos/1921/1041?image5'
    ];
    let index = 0;
    const next = document.querySelector('span.next');
    const prev = document.querySelector('span.prev');
    

    const nextBgImg = () => {
        let bgWrap = document.getElementById('header');
        console.log(bgWrap)
        if(index + 1 > arrayOfImgLinks.length - 1){
            index = 0;
        } else {
            index ++;
        }
        console.log(index)
        bgWrap.style.backgroundImage = `url(${arrayOfImgLinks[index]})`;
        console.log(bgWrap.style.backgroundImage)
    }
    const prevBgImg = () => {
        let bgWrap = document.getElementById('header');
        if(index - 1 < 0){
            index = arrayOfImgLinks.length - 1;
        } else {
            index --;
        }
        bgWrap.style.backgroundImage = `url(${arrayOfImgLinks[index]})`;

    }

    next.addEventListener('click',nextBgImg);
    prev.addEventListener('click',prevBgImg);


    


})()