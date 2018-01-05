import { ErrorMessages } from "./error-messages";

export const isRequired = text => text ? null : ErrorMessages.isRequired;