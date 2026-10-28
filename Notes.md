Whenever we try to talk with the database there can exist problems :
1.wrap in try catch and use promises 
2. database is stored in another continent so always use async and await.


// http crash course
Hyper text transfer protocol
URL
URI
URN
1. What are HTTP headers?
-> Headers are meta data which is the key - value pair sent along with request and response.
-> It is a stateless application level protocol
-> Caching , authentication , manage state
-> Categories for Headers:
  1. Request Header - from client
  2. Response Header - from server
  3. Representation Header - encoding/ compression
  4. Payload Header - Data

-> Most Common Header:
  1. Accept : application / json
  2. User - Agent
  3. Authorization
  4. Content - Type
  5. Cookie
  6. Cache - Control

-> HTTP methods : Basic set of operations that can be used to interact with server  
  1. GET : retrieve a resource
  2. HEAD : no message body (response header only)
  3.OPTIONS : what operations are available
  4.TRACE : loopback test (get some data)
  5. DELETE : remove a resource
  6.PUT : replace a resource
  7. POST : interact with resource mostly add.
  8. PATCH : change part of the resource.

-> HTTP Status Code:
   * 1xx - Informational
   * 2xx - Success
   * 3xx - Redirection
   * 4xx - Client Error
   * 5xx - Server error
-> Some common standard status code
1. 100 continue
2. 102 Processing
3. 200 OK
4. 201 created
5. 202 accepted
6. 307 temporary redirect
7. 308 permanant redirect
8. 400 Bad request
9. 401 Unathorized
10. 402 Payment required
11. 404 Not found
12. 500 Internal server error
13. 504 gateway time out 

