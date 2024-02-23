export class TOptional<Data = any> {
    private _data?: Data;

    constructor(data?: Data) {
        this._data = data;
    }

    hasValue(): boolean {
        return this._data !== undefined;
    }

    getValue(): Data | undefined {
        return this._data as Data;
    }

    static Null() {
        return new TOptional<any>(undefined);
    }

    static Success<Data>(data: Data) {
        return new TOptional<Data>(data);
    }
}
