function randomPassword(size) {
  var seed = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'Q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '2', '3', '4', '5', '6', '7', '8', '9'
  );//数组
  seedlength = seed.length;//数组长度
  var createPassword = '';
  for (i = 0; i < size; i++) {
    j = Math.floor(Math.random() * seedlength);
    createPassword += seed[j];
  }
  return createPassword;
}

function make(n) {
  var s = '';
  var start = 8500;
  n = n || 99;
  for (var i = 0; i < n; i++) {
    s += '"' + (start + i) + '":"' + randomPassword(10) + '",\n'
  }
  console.log(s)
}

make()
