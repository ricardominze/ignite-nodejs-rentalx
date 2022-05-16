import { Category } from "../../entities/Category";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
 
  constructor(private categoriesRepository: ISpecificationsRepository) {}

  execute(): Category[] {

    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListSpecificationUseCase };