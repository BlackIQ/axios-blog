# Axios Blog

We had a class that worked with APIs in ReactJs with out any library. Today we learned how to work with APIs with Axios,

## Axios

In ReactJS, Axios is a library that serves to create HTTP requests that are present externally. It is evident from the fact that we may sometimes in React applications need to get data from the external source. It is quite difficult to fetch such data so that they can be normally shown on the website. Thus, it helps in retrieving the data thereby adding it to the state to facilitate the application whenever the requirement arises.

## Pre project

In pre project we had some default ways to fetch data, send a post request and also delete things.

If you want to read about that project, it is also stored [Here](https://github.com/BlackIQ/React-Blog).

## Difference between Axios and normal ways

Let's talk about some stuff.

### Fetching data

Fetching data is popular as a **GET** method. Where you get the data from a source.

- Normal way

```javascript
fetch('http://localhost:8080/blogs')
.then(response => {
    return response.json();
})
.then((data) => {
    setData(data);
    setLoading(false);
});
```

- With Axios

```javascript
axios.get('http://localhost:8000/blogs').then((response) => {
    setData(response.data)
});
```

### Post request

When you want to send a data to a server or a url that is secured or things like this, you have to use **POST** method.

- Normal way

```javascript
fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify(blog),
}).then(() => {
});
```

- With Axios

```javascript
axios.post('http://localhost:8000/blogs', data).then(response => {
    console.log(response);
});
```

### Delete request

Imagine there is a blog in blog array, you want to delete one. So, use **DELETE** method.

- Normal way

```javascript
fetch('http://localhost:8000/blogs/' + id, {
    method: 'DELETE',
}).then(() => {
});
```

- With Axios

```javascript
axios.delete('http://localhost:8000/blogs/' + id).then(response => {
    console.log(response);
});
```

### Put

We call Update as **PUT** method. don't get confused.

- Normal way

I don't know how to use Put method in normal way.

- With Axios

```javascript
axios.put('http://localhost:8000/blogs/' + id, data).then(response => {
    console.log(response);
});
```
