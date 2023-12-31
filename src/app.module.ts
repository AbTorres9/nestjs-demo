import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'qwerty',
    //   database: 'database_development',
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    PostModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
