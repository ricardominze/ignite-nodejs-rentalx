import { SpeficificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default(): CreateSpecificationController => {

  const SpecificationsRepository = null;
  const createSpecificationUseCase = new CreateSpecificationUseCase(SpecificationsRepository);
  const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);
  return createSpecificationController
};