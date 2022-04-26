import { SpeficificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

const SpecificationsRepository = SpeficificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(SpecificationsRepository);
const listSpecificationController = new ListSpecificationsController(listSpecificationUseCase);

export { listSpecificationController };