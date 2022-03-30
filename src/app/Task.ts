export interface Task {
    id?: number; //use a ? to make an id optional
    text: string;
    day: string;
    reminder: boolean;
}