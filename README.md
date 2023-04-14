
# Food Management

"Surplus to Service: Linking Excess Food to Those in Need"


## Tech Stack

**Client:** Typerscript, Angular, CSS, Bootstrap, Cloudinary

**Server:** Firebase


## API Reference

#### Get all order

```http
  GET https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Post order

```http
  Post https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json

```

#### Get Users

```http
  GET https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/userlist.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Deployment

To Install node dependencies

```CMD
npm -i 
  
```

To Install Bootstrap

```CMD
npm i bootstrap@5.3.0-alpha3
  
```

To Install cloudinary

```CMD
npm i cloudinary
  
```

To deploy

```CMD
npm start
  
```


## Documentation

[SRS & Architecture](https://drive.google.com/drive/u/0/folders/1xrUIuvyawpB87qIZn1JWY5QIvG_uVbYk)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Screenshots



