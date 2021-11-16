let images = ['asdf.jpg', 'chikaPraise.jpg', 'FatsozFTW.png', 'NDA.png', 'something.jpg']
let i = 0;

function prev()
{
    if(i != 0)
    {
        console.log(images.length)
        i--;
        document.slide.src = images[i]
    }
    else{
        i=4
        document.slide.src = images[i]
    }
}
function next()
{
    if(i < images.length -1)
    {
        i++;
        document.slide.src = images[i]
    }
    else {
        i=0;
        document.slide.src = images[i]
    }
}
