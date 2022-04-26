import { SpeficificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const SpecificationsRepository = SpeficificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(SpecificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };