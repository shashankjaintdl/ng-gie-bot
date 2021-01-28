export interface Person{
    id?:number;
    name:string;
    gender?:'M'|'F';
}
export type Persons=Person[];