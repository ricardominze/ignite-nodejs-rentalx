import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {

  name: string;
  description: string;
}

class CreateSpecificationUseCase {
 
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {

    const specificationsAlreadyExists = this.specificationsRepository.findByName(name);
    if(specificationsAlreadyExists) {
      throw new Error("Specification Already exists!");
    }
    this.specificationsRepository.create({name, description});
  }
}

export { CreateSpecificationUseCase };