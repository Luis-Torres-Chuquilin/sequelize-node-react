<!-- @format -->

# Main Goal

This Repo aim to use good practice to build a small application using

sequelize (mysql) , node , react.

To make easy the connection using sequelize, we going to use sequelize-cli init.
After it you have to run:

# Create a Database

You can create a DATABASE with the next statement in mysqlWorbench

```sql
CREATE DATABASE Mysql_Node_React;
```

```json
sequelize init
```

You can delete the migrations folders and seeders 'cause you won't use in your daily basics.

# Convetions

In the connection:
You can write
"host": "127.0.0.1", or "host": "localhost",

To write the name of your models' fails you will use Capital Letter.
example:

- Post
- Comment

# Package installed

npm install sequelize sequelize-cli mysql2

This repo use a started configuration that you can find in the next repo <a href=""> aqui </a>

# Babelrc for ES6 Syntaxes

This Started use Babelrc to use ES6 syntaxes:

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

This plugin allow you to use class properties as super, inheritance, extend, etc.

```js
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

The dependencies to install are:

```js
  "devDependencies": {
    "@babel/core": "7.13.10",
    "@babel/node": "7.13.12",
    "@babel/plugin-proposal-class-properties": "^7.16.7",
    }
```

# Enton Variables to use

```js
  "devDependencies": {
    "dotenv": "^16.0.0",
    }
```
