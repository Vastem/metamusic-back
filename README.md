# Meta Music

<div>
<p style = 'text-align:center;'>
<img src="/meta-logo.png" alt="meta-music" width="200px">
</p>
</div>


This is the API for an audio stream platfrom.

## 💁‍♀️ How to install

To install and run the metamusic-back API locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Vastem/metamusic-back.git
```

2. Navigate to the project directory:

```
cd metamusic-back
```

3. Navigate to the project directory:

```
npm install
```

4. Configure the environment variables by creating a .env file and providing the necessary values. You can use the .env.example file as a template.

5. Start the API server:

```
node app.js
```

6. The API will be available at `http://localhost:3000`.

## ✨ Features

- Express
- Node.js
- JWT
- MongoDB


## 📝 Routes

The metamusic-back provides the following endpoints:
- `POST /admin`: Creates a new admin.
- `POST /admin/login`: Logs in an admin and generates a token.
- `GET /admin`: Retrieves all admins.
- `GET /admin/:id`: Retrieves admins by ID.
- `PUT /admin/:id`: Updates admin information by ID.
- `DELETE /admin/:id`: Delete admins by ID.

- `POST /user`: Creates a new user.
- `POST /user/login`: Logs in a user and generates a token.
- `GET /user`: Retrieves all users.
- `GET /user/:id`: Retrieves user by ID.
- `PUT /user/:id`: Updates user information by ID.
- `DELETE /user/:id`: Delete users by ID.

- `POST /song`: Creates a new song.
- `GET /song`: Retrieves all songs.
- `GET /song/:id`: Retrieves songs by ID.
- `PUT /song/:id`: Updates song information by ID.
- `DELETE /song/:id`: Delete songs by ID.
- `GET /song/search/byname/:name`: Retrieves songs by name.
- `GET /song/search/byalbum/:album`: Retrieves songs by album.
- `GET /song/search/bysingers/:singers`: Retrieves songs by singers.

- `POST /playlist`: Creates a new playlist.
- `GET /playlist`: Retrieves all playlists.
- `GET /playlist/:id`: Retrieves playlists by ID.
- `PUT /playlist/:id`: Updates playlist information by ID.
- `DELETE /playlist/:id`: Delete playlists by ID.
- `GET /playlist/search/byname/:name`: Retrieves playlists by name.
- `PUT /playlist/addsong/:idplaylist`: Add songs to playlist.
- `PUT /playlist/removesong`: Remove songs from playlist.

- `POST /suscription`: Creates a new suscription.
- `GET /suscription`: Retrieves all suscriptions.
- `GET /suscription/:id`: Retrieves suscriptions by ID.
- `PUT /suscription/:id`: Updates suscription information by ID.
- `DELETE /suscription/:id`: Delete suscriptions by ID.

## License

This project is licensed under the [MIT License](LICENSE).
