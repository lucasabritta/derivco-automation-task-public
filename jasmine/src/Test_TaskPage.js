class TestTaskPage {
  spinButton = document.getElementById('spinButton');
  currentBalance = document.getElementById('balance-value');
  winLabel = document.getElementById('winbox');
  combinationWinRows = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  testData = document.getElementById('testdata');
  firstColumn = document.getElementById('reel1');
  secondColumn = document.getElementById('reel2');
  thirdColumn = document.getElementById('reel3');
  fourthColumn = document.getElementById('reel4');
  fifthColumn = document.getElementById('reel5');
  getPrizeForCombination(combination) {
    combination = combination.replace(/x/g, '');
    return document.getElementsByClassName('win' + combination.toString())[0].getElementsByTagName('td')[1].innerHTML;
  }
}