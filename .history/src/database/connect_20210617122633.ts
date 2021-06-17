import { createConnection } from 'typeorm';

createConnection().then(() => console.log('\u{1F3E6} Successfully connected with database'));