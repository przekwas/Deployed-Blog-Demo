import { Query } from '../index';

const findOneByEmail = async (email: string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);

const findOneById = async (id: number) => Query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);

const insert = async (columns: string, values: any[]) => Query(`INSERT INTO users (${columns}) VALUE (?);`, values);

export default {
    findOneByEmail,
    findOneById,
    insert
}