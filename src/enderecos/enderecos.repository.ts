import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Endereco } from './entities/endereco.schema';
import axios from 'axios'; // Import Axios
import { ViaCepResponseDto } from './dto/viacep-response-dto';

@Injectable()
export class EnderecosRepository extends AbstractRepository<Endereco> {
  protected readonly logger = new Logger(EnderecosRepository.name);

  constructor(
    @InjectModel(Endereco.name) enderecoModel: Model<Endereco>,
    @InjectConnection() connection: Connection,
  ) {
    super(enderecoModel, connection);
  }

  async findCepData(cep: string): Promise<ViaCepResponseDto> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const response = await axios.get<ViaCepResponseDto>(url);

      return response.data;
    } catch (error) {
      this.logger.error('Failed to fetch address data from ViaCEP API.', error);
      throw new Error('Failed to fetch address data from ViaCEP API.');
    }
  }
}
