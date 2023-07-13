function imgChose(img) {
    document.querySelector('.nike').src = img;
}

function changeColor(color) {
    const fig = document.querySelector('.fig');
    const air = document.querySelector('.air');
    const btn = document.querySelector('.btn');

    fig.style.background = color;
    air.style.color = color;
    btn.style.background = color;

    btn.addEventListener('mouseover', function(){
        this.style.color = color;
        this.style.borderColor = color;
        this.style.background = '#fff';
    })

    btn.addEventListener('mouseout', function(){
        this.style.color = '';
        this.style.borderColor = '';
        this.style.background = color;
    })
}