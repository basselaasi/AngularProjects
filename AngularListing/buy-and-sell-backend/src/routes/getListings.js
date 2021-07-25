import { Boom } from '@hapi/boom'
import { fakeListings } from "./fake-data";
import { db } from '../database';


export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        //const listing =  fakeListings.find(listings => listings.id === id);
        //if (!listing) throw Boom.notFound(`Listing doesn't exist with id ${id}`);
        //return listing;
        const { results } = await db.query('select * from listings where id = ?', [id],);
        const listing = results[0];
        if (!listing) throw Boom.notFound(`Listing doesn't exist with id ${id}`);
        return listing;
        //return results;
        
    }
}