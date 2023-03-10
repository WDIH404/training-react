import React, { FunctionComponent, useState } from 'react';

interface OwnProps {
  description: string;
  isSelected?: boolean;
  action: () => void;
}

type Props = OwnProps;

const ToDoItem: FunctionComponent<Props> = (props) => {
  const onButtonClick = () => {
    props.action();
  };

  const [checked, setChecked] = useState(false);
  const chengeCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <div className={checked ? 'todo-item active' : 'todo-item'}>
      <p>{props.description}</p>
      <div className="buttons">
        <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
        <button className="button delete" onClick={onButtonClick}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
