var testTaskPage = new TestTaskPage();

function isAmountEqualsTo(expectAmout) {
    return expectAmout.toString() == testTaskPage.currentBalance.value;
}

function getWonPrize() {
    let winLabel = testTaskPage.winLabel;
    if (winLabel.style.visibility == 'visible') {
        return parseInt(winLabel.innerHTML.split(' ')[1]);
    }
    return 0;
}

function resetAmount() {
    testTaskPage.currentBalance.value = 1000;
}

function insertTestDataAndSpin(data) {
    testTaskPage.testData.value = data;
    testTaskPage.spinButton.click();
}

function getRowValueByIndex(index) {
    // index should be 1, 2 or 3
    var elm1 = testTaskPage.firstColumn.getElementsByClassName('notch notch' + index.toString())[0].innerHTML;
    var elm2 = testTaskPage.secondColumn.getElementsByClassName('notch notch' + index.toString())[0].innerHTML;
    var elm3 = testTaskPage.thirdColumn.getElementsByClassName('notch notch' + index.toString())[0].innerHTML;
    var elm4 = testTaskPage.fourthColumn.getElementsByClassName('notch notch' + index.toString())[0].innerHTML;
    var elm5 = testTaskPage.fifthColumn.getElementsByClassName('notch notch' + index.toString())[0].innerHTML;
    return elm1 + elm2 + elm3 + elm4 + elm5;
}

function isTopRowHaveSequence(){
    let row = getRowValueByIndex(1);
    return isSymbolIdentical(row);
}

function isBottonRowHaveSequence(){
    let row = getRowValueByIndex(3);
    return isSymbolIdentical(row);
}

function isSymbolIdentical(symbols) {
    //return true if have 3 or more identical symbols in the string
    if ((symbols.match(/111/g) || []).length >= 1){
        return true;
    } else  if ((symbols.match(/222/g) || []).length >= 1){
        return true;
    } else  if ((symbols.match(/333/g) || []).length >= 1){
        return true;
    } else  if ((symbols.match(/444/g) || []).length >= 1){
        return true;
    } else  if ((symbols.match(/555/g) || []).length >= 1){
        return true;
    }
    return false;
}

function getCombinationWinByIndex(index) {
    var row = testTaskPage.combinationWinRows[index].getElementsByTagName("td");
    var combination = row[0].innerHTML;
    var prize = row[1].innerHTML;
    return [combination, prize]
}