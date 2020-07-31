export enum TodoType {
  BASIC = 'BASIC',
  // MULTIPLE
  // TARGET_COUNT
}

export interface ITodo {
  title: string;
  type: TodoType;
  todoDone: number;
}

export interface ITodosState {
  editing: boolean;
  title: string;
  todaysDate: string;
  todos: ITodo[];
}
