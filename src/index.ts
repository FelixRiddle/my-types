// --- Lib ---
import StatusWrapper from "./lib/StatusWrapper";

// --- Types ---
// Frontend
import FieldType from "./input/FieldType";

// Server
import AppServerType from "./server/AppServerType";
import AppNames from "./server/AppNames";
import ServersLocation from "./server/ServersLocation";
// User
import DeleteUserResultType from "./server/user/DeleteUserResultType";
// Authentication
import BackdoorConfirmEmailInputType from "./server/authentication/auth/BackdoorConfirmEmailInputType";
import BackdoorConfirmEmailResultType from "./server/authentication/auth/BackdoorConfirmEmailResultType";
import DataResultType from "./server/authentication/user/DataResultType";
import LoginGetJwtResultType from "./server/authentication/auth/LoginGetJwtResultType";
import LoginInputType from "./server/authentication/auth/LoginInputType";
import RegisterInputType from "./server/authentication/auth/RegisterInputType";
// Debug
import DebugPropertyImageUploadType from "./server/debug/DebugPropertyImageUploadType";
// Property
import CategoryType from "./server/property/CategoryType";
import PriceType from "./server/property/PriceType";
import PropertyCompleteType from "./server/property/PropertyCompleteType";
import PropertyType from "./server/property/PropertyType";
// User Property
import CreateUserPropertyInputType from "./server/user/property/CreateUserPropertyInputType";
import CreateUserPropertyResultType from "./server/user/property/CreateUserPropertyResultType";
import DeleteUserPropertyResultType from "./server/user/property/DeleteUserPropertyResultType";
import MyPropertiesPageResultType from "./server/user/property/MyPropertiesPageResultType";

// Most used types
import CompleteUserData from "./CompleteUserData";
import DebugMessage from "./DebugMessage";
import FieldStatusType from "./status/FieldStatusType";
import Status from "./Status";

export {
    StatusWrapper,
}

export type {
    FieldType,
    
    // Servers location
    // This is a constant in 'configuration-mappings'
    ServersLocation,
    // App names
    // These index AppServerType
    AppNames,
    // Server type
    // This is the object that will be stored in a file to hold the servers location if it changed
    AppServerType,
    
    BackdoorConfirmEmailInputType,
    BackdoorConfirmEmailResultType,
    CategoryType,
    CreateUserPropertyInputType,
    CreateUserPropertyResultType,
    DataResultType,
    DebugPropertyImageUploadType,
    DeleteUserPropertyResultType,
    DeleteUserResultType,
    LoginInputType,
    LoginGetJwtResultType,
    MyPropertiesPageResultType,
    PriceType,
    PropertyCompleteType,
    PropertyType,
    RegisterInputType,
    
    CompleteUserData,
    DebugMessage,
    FieldStatusType,
    Status,
}
