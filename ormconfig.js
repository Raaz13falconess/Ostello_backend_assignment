module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Saumya',
  password: 'Qwert@123',
  database: 'ostello_backend',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscribers',
  },
};
