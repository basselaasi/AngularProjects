import { getAllListingsRoute} from './getAllListings.js';
import { getListingRoute } from './getListings.js';
import { addViewToListingRoute } from './addViewToListings.js';
import { getUserListingsRoute } from './getUserListings.js';
import { createNewListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListing';
import { deleteListingRoute } from './deleteListings.js';

export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute

];