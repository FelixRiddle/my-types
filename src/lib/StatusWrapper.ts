import FieldType from "../input/FieldType";
import Status from "../Status";

/**
 * For easier handling of the status object
 */
export default class StatusWrapper {
    status: Status;
    
    constructor(status: Status) {
        this.status = status;
    }
    
    /**
     * Get the object
     */
    get(): Status {
        return this.status;
    }
    
    /**
     * Check if the object is just using default values
     * 
     * @returns {bool}
     */
    isDefault() {
        if(!this.status.error && this.status.message.length === 0) {
            return true;
        }
        
        return false;
    }
    
    /**
     * Set this object as an error and give it a message
     * 
     * @param {string} field The field name for example 'email', 'password'
     * @param {string} message The field message for example 'Email not given'
     */
    static newError(field: FieldType, message: string) {
        const status: Status = {
            error: true,
            field,
            message,
        };
        
        return status;
    }
    
    /**
     * Set this object as a success
     * 
     * @param {string} field The field name for example 'email', 'password'
     * @param {string} message The field message for example 'Email Ok'
     */
    static newSuccess(field: FieldType, message: string) {
        const status: Status = {
            error: false,
            field,
            message,
        };
        
        return status;
    }
}
