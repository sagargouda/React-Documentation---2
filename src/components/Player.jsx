import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleChange() {
    setIsEditing((wasEditing) => !wasEditing);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChange}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
