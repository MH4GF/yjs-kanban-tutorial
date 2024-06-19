import type { FC } from "react";
import styles from "./App.module.css";
import TaskColumn from "./TaskColumn";
import { DndProvider } from "./dnd/DndProvider";
import { useSyncToYjsEffect } from "./useSyncToYjsEffect";

const App: FC = () => {
  useSyncToYjsEffect();

  return (
    <DndProvider>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Project Kanban Board</h1>
        <div className={styles.grid}>
          <TaskColumn status="To Do" />
          <TaskColumn status="In Progress" />
          <TaskColumn status="Done" />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
