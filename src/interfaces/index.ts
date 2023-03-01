export interface IBug {
    id: string;
    title: string;
    description: string;
    priority: number;
    solved: boolean;
    assignee: string;
    reporter: string;
  }