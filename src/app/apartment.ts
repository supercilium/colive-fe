export interface Task {
  id: string;
  name: string;
  status: 'New' | 'Done' | 'Canceled';
  priority?: 'Low' | 'Normal' | 'High';
  deadline?: string;
  is_expense?: boolean;
  total?: number;
  creator_id: string;
  creator_name: string;
  assignee_id?: string;
  assignee_name?: string;
  description?: string;
}

export class Apartment {
  id: string;
  name: string;
  rent?: number;
  rentPaymentDate?: string;
  address?: string;
  users?: Array<{
    id: string;
    name: string;
  }>;
  tasks?: Array<Task>;
  constructor(name: string, id: string) {
    this.id = id;
    this.name = name;
  }
}
