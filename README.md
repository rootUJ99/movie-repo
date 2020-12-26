# Movie App Repo


for demo visit [**https://movie-app-repo.herokuapp.com/**](https://movie-app-repo.herokuapp.com/)

Flow can only create normal user so here is the credentials for admin user
```
Admin user cred->
username ->root
password ->toor
```

to start locally 

```jsx
npm install; 
```

```jsx
npm run start;
```

and visit **[http://localhost:3000](http://localhost:3000)**

List of APIs
```
public APIs
for search and listing movies
https://movie-app-repo.herokuapp.com/api/movie/list?search=

To register user
https://movie-app-repo.herokuapp.com/api/user/create

To login user
https://movie-app-repo.herokuapp.com/api/user/token

private API (requires auth)
To add, update delete movie
https://movie-app-repo.herokuapp.com/api/movie/add
https://movie-app-repo.herokuapp.com/api/movie/update/:id
https://movie-app-repo.herokuapp.com/api/movie/delete/:id
```