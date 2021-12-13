import { v4 as uuidv4 } from 'uuid';
import { Org } from "./orgs.interfaces";
import { EntitiesStorage, DataContainer } from "../../utils/storage";

export type OrgsDataContainer = DataContainer<Org>;

export class OrgsRepository {
  static storageKey = 'orgs';

  private _orgsStorage = new EntitiesStorage<Org>(OrgsRepository.storageKey);

  /**
   * Сохранение списка организаций в local storage.
   */
   private storeOrgs(orgs: OrgsDataContainer) {
    this._orgsStorage.storeData(orgs);
  }

  /**
   * Получение списока организаций.
   */
  getOrgs(): OrgsDataContainer {
    const orgs = this._orgsStorage.retreiveData();

    return orgs
  }


  getOrgById(id: string): Org | undefined {
    const orgs = this._orgsStorage.retreiveData();

    return orgs[id];
  }

  /**
   * Создание организации.
   * @param org Организация.
   */
  create(org: Org) {
    const orgs = this.getOrgs();

    orgs[uuidv4()] = org;
  
    this.storeOrgs(orgs);
  }
  
  /**
   * Обновление организации.
   * @param id ID организации.
   * @param org Организация.
   */
  update(id: string, org: Org) {
    const orgs = this.getOrgs();

    orgs[id] = org;
  
    this.storeOrgs(orgs);
  }
  
  /**
   * Удаление организации из списка.
   * @param id ID организации.
   */
  remove(id: string) {
    const orgs = this.getOrgs();

    delete orgs[id];
  
    this.storeOrgs(orgs);
  }
}
