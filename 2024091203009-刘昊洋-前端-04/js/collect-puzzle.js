
function collectPuzzle(...puzzles) {
  // TODO:在这里写入具体的实现逻辑
  // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回
  const allPuzzles = redPuzzles.concat(bluePuzzles, greenPuzzles);
  let resultPuzzles = [];
  for (let i = 0; i < allPuzzles.length; i++) {
    if (!resultPuzzles.includes(allPuzzles[i])) {
      resultPuzzles.push(allPuzzles[i]);
    }
  }
  console.log(resultPuzzles);
  return resultPuzzles;
}

