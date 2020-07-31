export enum TodoType {
  BASIC = 'BASIC',
  // MULTIPLE
  // TARGET_COUNT
}

export interface ITodo {
  title: string;
  type: TodoType;
  todoDone: number;
  // TODO: Additional properties based on type
  // target?: number;
  // Custom repeat (other than daily)?
  // track history?
}

export interface ITodosState {
  managing: boolean;
  title: string;
  // TODO: store as UNIX Epoch time for space
  todaysDate: string;
  todos: ITodo[];
}
