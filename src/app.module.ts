import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DoctorsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
