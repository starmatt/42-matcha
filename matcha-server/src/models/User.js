import schemas from '../schemas';
import Model from './Model';

export default class User extends Model
{
    constructor(data) {
        super(); // This is needed to be able use 'this' in the child class context. Why ? IDK.
        this.schema = schemas.user;
        this.data = this.fill(data);
    }

    static get table() { // The table name as a static property, so it can be used in static methods
        return 'users';
    }

    // The properties that are not automatically handled by the database,
    // basically anything that isn't a timestamp or the ID
    static get fillable() {
        return ['email', 'password', 'username'];
    }
}
