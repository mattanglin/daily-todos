export enum TodoType {
  BASIC = 'BASIC',
  MULTIPLE = 'MULTIPLE',
  TARGET = 'TARGET',
}

export interface ITodo {
  title: string;
  type: TodoType;
  completed: number;
  target?: number;
  // TODO: Additional properties based on type
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
