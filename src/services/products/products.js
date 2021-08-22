let productApplication;

(function () {
  const data = [
    {
      id: 1,
      type: 'oven',
      name: 'H 6100 BM AM',
      colors: ['red', 'black'],
      img: 'https://media.miele.com/images/2000010/200001079/20000107932.png?d=250&impolicy=boxed',
    },
    {
      id: 2,
      type: 'fridge',
      name: 'F 2412 Vi',
      colors: ['red', 'white', 'black', 'green'],
      img: 'https://media.miele.com/images/2000016/200001623/20000162315.png?d=250&impolicy=boxed',
    },
    {
      id: 3,
      type: 'vacuum',
      name: 'Classic C1 Pure Suction PowerLine - SBAN0',
      colors: ['yellow', 'white', 'black'],
      img: 'https://media.miele.com/images/2000014/200001403/20000140384.png?d=250&impolicy=boxed',
    },
    {
      id: 4,
      type: 'fridge',
      name: 'K 2611 Vi',
      colors: ['red', 'blue', 'yellow', 'green'],
      img: 'https://media.miele.com/images/2000014/200001469/20000146990.png?d=250&impolicy=boxed',
    },
    {
      id: 5,
      type: 'fridge',
      name: 'F 2471 SF',
      colors: ['red', 'white'],
      img: 'https://media.miele.com/images/2000014/200001470/20000147042.png?d=250&impolicy=boxed',
    },
    {
      id: 6,
      type: 'fridge',
      name: 'K 31222 Ui',
      colors: ['yellow', 'blue', 'brown'],
      img: 'https://media.miele.com/images/2000013/200001331/20000133114.png?d=250&impolicy=boxed',
    },
    {
      id: 7,
      type: 'vacuum',
      name: 'Blizzard CX1 PureSuction PowerLine - SKRE0',
      colors: ['red', 'white', 'grey'],
      img: 'https://media.miele.com/images/2000013/200001383/20000138390.png?d=250&impolicy=boxed',
    },
    {
      id: 8,
      type: 'vacuum',
      name: 'Triflex HX1 - SMUL0',
      colors: ['black', 'grey', 'white'],
      img: 'https://media.miele.com/images/2000015/200001592/20000159287.png?d=250&impolicy=boxed',
    },
    {
      id: 9,
      type: 'vacuum',
      name: 'Scout RX2 Home Vision - SLQL0 30',
      colors: ['red', 'black'],
      img: 'https://media.miele.com/images/2000012/200001292/20000129233.png?d=250&impolicy=boxed',
    },
    {
      id: 10,
      type: 'oven',
      name: 'H 6780-2 BP',
      colors: ['red', 'yellow'],
      img: 'https://media.miele.com/images/2000010/200001064/20000106460.png?d=250&impolicy=boxed',
    },
    {
      id: 11,
      type: 'oven',
      name: 'H 6200 BM AM',
      colors: ['black', 'white'],
      img: 'https://media.miele.com/images/2000011/200001124/20000112443.png?d=250&impolicy=boxed',
    },
    {
      id: 12,
      type: 'oven',
      name: 'H 6870 BM',
      colors: ['green', 'yellow'],
      img: 'https://media.miele.com/images/2000013/200001352/20000135235.png?d=250&impolicy=boxed',
    },
  ];
  function fetchData(cb) {
    if (!cb) {
      // eslint-disable-next-line no-throw-literal
      throw 'Callback not defined';
    }
    setTimeout(() => {
      if (Math.floor(Math.random() * 20) === 2) {
        cb('Fetch data error');
      } else {
        cb(null, data);
      }
    }, 1000);
  }

  productApplication = {
    fetchData,
  };

  if (typeof module !== 'undefined') {
    module.exports = productApplication;
  }
}());
