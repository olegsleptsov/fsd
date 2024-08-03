import {ReactNode} from "react";

export const TaskItem = ({
  title,
  actions,
}: {
  title: string;
  actions: ReactNode
}) => {
  return (
    <div
      style={{
      display: "flex",
      gap: "10px",
      padding: "10px",
      flexDirection: 'column',
      backgroundColor: '#afc5dc',
      borderRadius: '2rem',
      marginBottom: '2rem'
      }}
    >
      <h1>{title}</h1>
      {actions}
    </div>
  );
};
