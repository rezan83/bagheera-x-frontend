import { ReactNode } from "react";

export interface IBug {
  id: string;
  title: string;
  description: string;
  priority: number;
  solved: boolean;
  assignee: string;
  reporter: string;
}

export interface IChildren {
  children: ReactNode;
}