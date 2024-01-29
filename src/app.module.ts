import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PessoasModule } from './pessoas/pessoas.module';
import { ProjetosModule } from './projetos/projetos.module';
import { CronogramasModule } from './cronogramas/cronogramas.module';
import { AtividadesModule } from './atividades/atividades.module';
import { RubricasModule } from './rubricas/rubricas.module';
import { OrcamentosModule } from './orcamentos/orcamentos.module';

@Module({
  imports: [
    AuthModule,
    PessoasModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProjetosModule,
    CronogramasModule,
    AtividadesModule,
    RubricasModule,
    OrcamentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
