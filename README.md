# React Bike Shop 

## Technologies Used
* Node <br>
* Express <br>
* React <br>
* SQLite (database) <br>
* MongoDB (user authentication) <br>
* Mongoose (user authentication) <br>
* Entity Relationship Diagram <br>


## REST APIs  
Below are React Bike Shop's current endpoints. To access full CRUD operators, you can try it out using Postman!

### USER - GET, POST, PUT, DELETE
|   Requests      | Path        | Description |
| ----------- | ----------- | ----------- |
|  GET | /api/users | Get information of every user |
|  GET | /api/users/:id | Get a single user's inforation  |
|  POST  | /api/users     |  Create a user information  |
|  PUT  | /api/users/:id       |  Update a user's information   |
|  DELETE  | /api/users/:id      |  Delete information on user  |

### BIKE BRANDS - GET, POST, PUT, DELETE
|   Requests      |    Path        | Description |
| ----------- | ----------- | ----------- |
|  GET  | /api/bikemake  | Get all bike make information  |
|  GET  | /api/bikemake:id   | Get a single bike make information  |
|  POST | /api/bikemake  |  Create a bike make information     |
|  PUT  | /api/bikemake/:id  |  Update a bike make information   |
|  DELETE  | /api/bikemake/:id   |  Delete a bike make information  |

### BIKE SPECS - GET, POST, PUT, DELETE
|    Requests   |    Path     | Description  |
| ----------- | ----------- | ----------- |
| GET    | /api/bikespecs       |  Get list of all bike spec information   |
| GET    | /api/bikespecs/:id   |  Get information on single bike spec  |
| POST   | /api/bikespecs/      |  Create bike spec information  |
| PUT    | /api/bikespecs/:id   |  Update bike spec information   |
| DELETE | /api/bikespecs/:id   |  Delete bike spec information  |

### ORDER JOIN TABLE - GET, POST, PUT, DELETE
|    Requests   |    Path     | Description  |
| ----------- | ----------- | ----------- |
| GET    | /api/orders       |  Get list of all order information   |
| GET    | /api/orders/:id   |  Get information on single customer order   |
| POST   | /api/orders/      |  Create order information  |
| PUT    | /api/orders/:id   |  Update order information   |
| DELETE | /api/orders/:id   |  Delete order information  |


![bikeshoppingapi](./erd.jpeg)
