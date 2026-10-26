// This ApiResponse class is the opposite side of the ApiError class we just discussed. ApiResponse is used to create a standardized response when an API request succeeds.
class ApiResponse {
    constructor(
        statusCode,
        data,
        message = "Success"

    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400

    }
}