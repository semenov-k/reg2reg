import { OrgsRepository } from "./orgs.repository"
import { Org } from "./orgs.interfaces";


export class OrgsService {
  private _orgsRepository: OrgsRepository = new OrgsRepository();

  /**
   * Получение списка орагинизаций.
   * @returns 
   */
  getAll() {
    return this._orgsRepository.getOrgs();
  }

  /**
   * Получение органиации по идетификтору.
   * @param id ID организации в списке.
   */
  getById(id: string) {
    return this._orgsRepository.getOrgById(id);
  }

  /**
   * Создание организации.
   * @param org Организация.
   */
  create(org: Org) {
    this._orgsRepository.create(org);
  }

  /**
   * Обновление организации.
   * @param id ID организации в списке.
   * @param org Организация.
   */
  update(id: string, org: Org) {
    this._orgsRepository.update(id, org)
  }

  /**
   * Удаление организации из списка.
   * @param id ID организации в списке.
   */
  remove(id: string) {
    this._orgsRepository.remove(id);
  }
}