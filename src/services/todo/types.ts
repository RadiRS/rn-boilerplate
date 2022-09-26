export interface Todo {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

export interface ParamsTodo {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
  q?: string;
}
