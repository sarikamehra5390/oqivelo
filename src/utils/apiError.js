class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack= ""
    ){
        //Because ApiError extends Error, it must initialize the parent class before using this in its constructor.
        // The super() call invokes the parent class's constructor.


        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        
        // A stack trace helps you understand where an error happened in your code. It typically includes the file name, line number, and function calls involved.

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}