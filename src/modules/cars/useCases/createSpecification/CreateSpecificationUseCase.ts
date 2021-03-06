import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {

  name: string;
  description: string;
}

class CreateSpecificationUseCase {
 
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {

    const specificationsAlreadyExists = await this.specificationsRepository.findByName(name);
    if(specificationsAlreadyExists) {
      throw new Error("Specification Already exists!");
    }
    this.specificationsRepository.create({name, description});
  }
}

export { CreateSpecificationUseCase };