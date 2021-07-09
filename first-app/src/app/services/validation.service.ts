import { FormControl } from "@angular/forms";

export function validationPassword(c:FormControl, otherValue:any) {
    if(c.value == otherValue.value) {
        return null
    }
    return {
        validationPassword : {
            valid : false,
        },
        error : "error confirm password"
    }
}