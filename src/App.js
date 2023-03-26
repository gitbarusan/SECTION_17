import "./styles.css";
import { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState();

  const onClickLike = () => {
    setLiked(!liked);
  };
  const onCangeNameInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={onClickLike}>いいね</button>
      <p>{liked ? "済" : "未"}</p>
      <input type="text" onChange={onCangeNameInput} />
      <p>こんにちは、{name}さん</p>
    </div>
  );
}
