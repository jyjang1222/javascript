function getName() {
  return prompt('이름을 입력하세요.', '');
}
function greet() {
  const userName = getName();
  console.log('hello ' + userName);
}
greet();
