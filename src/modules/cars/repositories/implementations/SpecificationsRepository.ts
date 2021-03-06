import { Specification } from '../../entities/Specification';
import { ICreateSpecificationDTO } from '../ISpecificationsRepository';

class SpeficificationsRepository {

  private static INSTANCE: SpeficificationsRepository;

  private specifications: Specification[];

  private constructor() {
    
    this.specifications = [];
  }

  public static getInstance(): SpeficificationsRepository {
    
    if(!SpeficificationsRepository.INSTANCE){
      SpeficificationsRepository.INSTANCE = new SpeficificationsRepository();
    }
    return SpeficificationsRepository.INSTANCE;
  }

  create({name, description}: ICreateSpecificationDTO): void {

    const specification = new Specification();
    Object.assign(specification, {
      name, 
      description,
      created_at: new Date()
    });
    this.specifications.push(specification);
  }

  list(): Specification[] {

    return this.specifications;
  }

  findByName(name: string): Specification {

    const specification = this.specifications.find((specification) => specification.name == name);
    return specification;
  }
}

export { SpeficificationsRepository }