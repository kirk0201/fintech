const Welcome = ({ username, age }) => {
  console.log(username, age);
  return (
    <h2>
      &rarr; 안녕하세요 {username}님 나이는 {age}입니다
    </h2>
  );
};
export default Welcome;
