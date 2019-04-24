var testTaskPage = new TestTaskPage();

describe('The user cannot play with amount <= 0', ()=>{
  beforeEach(function() {
    insertTestDataAndSpin('0');
  });

	it('The amount should be 0', function() {
    expect(isAmountEqualsTo(0)).toBe(true);
  });
})

describe('verify the top and bottom row', ()=>{
  beforeEach(function() {
    resetAmount();
  });

  it('Spin until find any sequence in top row', function() {
    while (true) {
      resetAmount();
      insertTestDataAndSpin('xxxxx');
      if(isTopRowHaveSequence()) {
        console.log('left with top row value: ' + getRowValueByIndex(1));
        break;
      }
    }
    expect(isAmountEqualsTo(999)).toBe(true);
  });

  it('Spin until find any sequence in botton row', function() {
    while (true) {
      resetAmount();
      insertTestDataAndSpin('xxxxx');
      if(isBottonRowHaveSequence()) {
        console.log('left with botton row value: ' + getRowValueByIndex(3));
        break;
      }
    }
    expect(isAmountEqualsTo(999)).toBe(true);
  });
})

describe('Spin button', ()=>{
  beforeEach(function() {
    resetAmount();
  });

	it('Amout should be 999 plus the prize', function() {
    testTaskPage.spinButton.click();
    let expectValue = 999 + getWonPrize();
    expect(isAmountEqualsTo(expectValue)).toBe(true);
  });
})

describe('Verify consecutive combinations to win', ()=>{
  let combinations = ['111xx', 'x111x', 'xx111', '1111x', 'x1111', '11111',
                      '222xx', 'x222x', 'xx222', '2222x', 'x2222', '22222',
                      '333xx', 'x333x', 'xx333', '3333x', 'x3333', '33333',
                      '444xx', 'x444x', 'xx444', '4444x', 'x4444', '44444',
                      '555xx', 'x555x', 'xx555', '5555x', 'x5555', '55555'];
  let amountBefore = 0;

  beforeAll(function() {
    resetAmount();
  });

  beforeEach(function() {
    jasmine.clock().install();
    amountBefore = parseInt(testTaskPage.currentBalance.value);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  combinations.forEach(function(testData) {
    let prize = parseInt(testTaskPage.getPrizeForCombination(testData));

    it('The user should win with the combination '+testData, function() {
      insertTestDataAndSpin(testData);
      let prizeValue = getWonPrize();
      expect(prizeValue).toBe(prize);
      jasmine.clock().tick(5000);
      expect(isAmountEqualsTo(amountBefore + prize - 1)).toBe(true);
    });
  });
})

describe('Verify non-consecutive combinations', ()=>{
  // since the game description only says "you must get 3, 4 or 5 identical symbols in the middle row."
  // the non-consecutive values could won the prize
  // Since we have a lack of documentations I will consider that the user should not won with non-consecutive combinations
  let combinations = ['x11x1', 'x1x11', '11x1x', '1x11x', '1xx11', '1x1x1', '11xx1',
                      'x22x2', 'x2x22', '22x2x', '2x22x', '2xx22', '2x2x2', '22xx2',
                      'x33x3', 'x3x33', '33x3x', '3x33x', '3xx33', '3x3x3', '33xx3',
                      'x44x4', 'x4x44', '44x4x', '4x44x', '4xx44', '4x4x4', '44xx4',
                      'x55x5', 'x5x55', '55x5x', '5x55x', '5xx55', '5x5x5', '55xx5'];
  let amountBefore = 0;

  beforeAll(function() {
    resetAmount();
  });

  beforeEach(function() {
    jasmine.clock().install();
    amountBefore = parseInt(testTaskPage.currentBalance.value);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  combinations.forEach(function(testData) {

    it('The user should not win with the combination '+testData, function() {
      insertTestDataAndSpin(testData);
      let prizeValue = getWonPrize();
      expect(prizeValue).toBe(0);
      jasmine.clock().tick(5000);
      expect(isAmountEqualsTo(amountBefore - 1)).toBe(true);
    });
  });
})