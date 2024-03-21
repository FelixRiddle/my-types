import FieldType from "./input/FieldType";

/**
 * Status is the response from my endpoints
 * 
 * It reports the state of the request
 */
interface Status {
    error: boolean,
    message: string,
    // If it was an input field, then this is guaranteed
    field?: FieldType,
    // Some messages should be notified, others not
    shouldNotify?: boolean,
}

// Aliases
export type ValidationResult = Status;
// export type 

export default Status;
