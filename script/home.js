function getInnerTextByID(id) {
    return document.getElementById(id).innerText;
}
function setInnerTextById(id, text) {
    document.getElementById(id).innerText = text;
}
function getInnerTextByClassName(className) {
    return document.getElementsByClassName(className).innerText;
}
document.getElementById('card-container').addEventListener('click', function (e) {
    //heart
    if (e.target.className.includes('heart-icon')) {
        let numberOFHearts = getInnerTextByID('hearts-number');
        let currentNumberOfHearts = Number(getInnerTextByID('hearts-number')) + 1;
        setInnerTextById('hearts-number', currentNumberOfHearts);
    }
    //call
    if (e.target.className.includes('call-btn')) {
        let coinNumber = Number(getInnerTextByID('coin-number'));
        if (coinNumber >= 20) {
            alert(`Calling ${e.target.parentNode.parentNode.children[2].innerText} ${e.target.parentNode.parentNode.children[3].innerText}...`);
            coinNumber -= 20;
            setInnerTextById('coin-number', coinNumber);
        } else {
            alert(`Call unavailable! Please make sure you have 20 or more coins.`);
        }
    }
});

