import { Property } from '@tsed/schema';

export class ObjectId {
    @Property()
    readonly $oid: string
    
    constructor(id: string) {
        this.$oid = id
    }
}