import schemas from '../schemas';
import Model from './Model';

export default class Message extends Model{
    constructor(data) {
        super(); // This is needed to be able use 'this' in the child class context. Why ? IDK.
        this.schema = schemas.message;
        this.data = this.fill(data);
    }

    static get table() {
        return 'messages';
    }

    static get fillable() {
        return ['message']
    }
}