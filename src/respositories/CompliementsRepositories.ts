import { EntityRepository, Repository } from "typeorm";
import { Compliment } from '../entities/Compliement'

@EntityRepository(Compliment)
class CompliementsRepositories extends Repository<Compliment> { }

export { CompliementsRepositories }