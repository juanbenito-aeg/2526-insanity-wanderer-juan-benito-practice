function rollDice(quantity, faces) {
  let result = 0;

  for (let i = 0; i < quantity; i++) {
    result += Math.floor(Math.random() * (faces - 1 + 1) + 1);
  }

  return result;
}

for (let i = 0; i < 100; i++) {
  console.log(rollDice(2, 6));
}
