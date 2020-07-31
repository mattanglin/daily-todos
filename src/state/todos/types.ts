export enum TodoType {
  BASIC = 'BASIC',
  // MULTIPLE
  // TARGET_COUNT
}

export interface ITodo {
  title: string;
  type: TodoType;
  completed: number;
  // TODO: Additional properties based on type
  // target?: number;
  // Custom repeat (other than daily)?
  // track history?
}

export interface ITodosState {
  // Are we managing our todos?
  managing: boolean;
  // Are we editing a todo?
  editing?: number,
  // Todos list title
  title: string;
  // TODO: store as UNIX Epoch time for space
  todaysDate: string;
  todos: ITodo[];
}
