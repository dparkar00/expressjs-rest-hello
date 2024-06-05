
/**
 * Public Routes are those API url's that anyone can request
 * whout having to be logged in, for example:
 * 
 * POST /user is the endpoint to create a new user or "sign up".
 * POST /token can be the endpoint to "log in" (generate a token)
 */
import { Router } from 'express';
import { safe } from './utils';
import * as actions from './actions';

const router = Router();

// signup route, creates a new user in the DB
router.post('/user', safe(actions.createUser));

router.get('/people', safe(actions.getPeople));

router.get('/people/:people_id', safe(actions.getPerson));

router.get('/planet/:people_id', safe(actions.getPlanet));


router.get('/planet', safe(actions.getPlanets));

router.post('/favorite/people/:people_id', safe(actions.addFavoritePeople));

router.post('/favorite/planet/:planet_id', safe(actions.addFavoritePlanet));






export default router;
