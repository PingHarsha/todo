export class TodoListItem {
  description: string;
  updated_at: Date;
  id: number;
  created_at: Date;
  title: string;

  constructor(description: string, updated_at: Date, id: number, created_at: Date, title: string) {
    this.description = description;
    this.updated_at = updated_at;
    this.id = id;
    this.created_at = created_at;
    this.title = title;
  }
}
