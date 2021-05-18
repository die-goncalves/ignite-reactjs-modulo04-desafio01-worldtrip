import { Client } from 'faunadb';

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY_WORLDTRIP_READ_PERMISSION
})