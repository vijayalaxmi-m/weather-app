import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  @Cron('* 0 * * * *')
  handleSchedule(){
    this.logger.debug('Called every hour');
  }
}
