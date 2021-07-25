import { db } from '../database';
import { fakeListings } from './fake-data';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        //return fakeListings;
        const { results } = await db.query('select * from listings');
        return results;
    }
}