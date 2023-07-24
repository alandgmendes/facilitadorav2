import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Pessoa } from './entities/pessoa.schema';

@Injectable()
export class PessoasRepository extends AbstractRepository<Pessoa> {
  protected readonly logger = new Logger(PessoasRepository.name);

  constructor(
    @InjectModel(Pessoa.name) pessoaModel: Model<Pessoa>,
    @InjectConnection() connection: Connection,
  ) {
    super(pessoaModel, connection);
  }
}
