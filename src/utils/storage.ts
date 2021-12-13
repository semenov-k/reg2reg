export type DataContainer<T> = { [k: string]: T };

export class EntitiesStorage<T> {
  private _key: string;

  constructor(key: string) {
    this._key = key;
  }

  retreiveData(): DataContainer<T> {
    const json = localStorage.getItem(this._key);

    if (json === null) {
      return {};
    }
  
    return JSON.parse(json);
  }

  storeData(data: DataContainer<T>) {
    const json = JSON.stringify(data);

    localStorage.setItem(this._key, json);
  }
}
