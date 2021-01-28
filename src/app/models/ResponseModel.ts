export class ResponseModel<T>{
    private _object: T[];
    // private _message: string;
    // private _status: boolean;
    // private _noOfPage: number;
    // private _totalItems: number;
    get object(): T[] {
        return this._object;
    }
    set object(value: T[]) {
        this._object = value;
    }   
}