function getInnerTextByID(id) {
    return document.getElementById(id).innerText;
}
function setInnerTextById(id, text) {
    document.getElementById(id).innerText = text;
}
function getInnerTextByClassName(className) {
    return document.getElementsByClassName(className).innerText;
}
function getElementByID(id) {
    return document.getElementById(id);
}
document.getElementById('card-container').addEventListener('click', function (e) {
    //heart
    if (e.target.className.includes('heart-icon')) {
        const numberOFHearts = getInnerTextByID('hearts-number');
        const currentNumberOfHearts = Number(getInnerTextByID('hearts-number')) + 1;
        setInnerTextById('hearts-number', currentNumberOfHearts);
    }
    //call
    if (e.target.className.includes('call-btn')) {
        let coinNumber = Number(getInnerTextByID('coin-number'));
        if (coinNumber >= 20) {
            alert(`📞 Calling ${e.target.parentNode.parentNode.children[2].innerText} ${e.target.parentNode.parentNode.children[3].innerText}...`);
            coinNumber -= 20;
            setInnerTextById('coin-number', coinNumber);
            const newCallHistory = document.createElement('div');
            newCallHistory.innerHTML = `
            <div class="bg-[#fafafa] text-[#111111] text-[18px] rounded-lg p-4 flex justify-between items-center gap-4">
                <div class="">
                    <h3 class="font-semibold">${e.target.parentNode.parentNode.children[1].innerText}</h3>
                    <p class="font-inter text-[#5C5C5C]">${e.target.parentNode.parentNode.children[3].innerText}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
            </div>
            `;
            getElementByID('call-history-container').appendChild(newCallHistory);
        } else {
            alert(`❌ Call unavailable! Please make sure you have 20 or more coins.`);
        }
    }
    if (e.target.className.includes('copy-btn')) {
        const phoneNumber = e.target.parentNode.parentNode.children[3].innerText;
        navigator.clipboard.writeText(phoneNumber);
        alert(`Number copied: ${phoneNumber}`);
        let copyNumber = getInnerTextByID('copy-number');
        let currentCopyNumber = Number(copyNumber) + 1;
        setInnerTextById('copy-number', currentCopyNumber);
    }
});

getElementByID('clear-btn').addEventListener('click', function () {
    getElementByID('call-history-container').innerText = '';
});