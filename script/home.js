function getInnerTextByID(id) {
    return document.getElementById(id).innerText;
}
function setInnerTextById(id, text) {
    document.getElementById(id).innerText = text;
}
document.getElementById('card-container').addEventListener('click', function (e) {
    if (e.target.className.includes('heart-icon')) {
        let numberOFHearts = getInnerTextByID('hearts-number');
        let currentNumberOfHearts = Number(getInnerTextByID('hearts-number')) + 1;
        setInnerTextById('hearts-number', currentNumberOfHearts);
    }
});