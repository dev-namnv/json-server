/**
 * @return {string}
 */
function ImageProductExist(url)
{
    var img = new Image();
    img.src = url;
    if(img.height === 0)
    {
        url = 'http://placehold.it/700x400';
    }
    return url;
}