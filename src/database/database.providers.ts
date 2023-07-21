import { Sequelize } from 'sequelize-typescript';
import { User } from './entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'qwerty',
        database: 'database_development',
        models: [User],
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
  //   {
  //     provide: 'SEQUELIZE',
  //     useFactory: async () => {
  //       const sequelize = new Sequelize({
  //         // ...(config.database as any),
  //         dialect: 'mysql',
  //         logging: false,
  //         models: [CacheLogs, RequestData, Page],
  //       });
  //       // await sequelize.sync({ force: true });
  //       await sequelize.sync();

  //       return sequelize;
  //     },
  //   },
];
