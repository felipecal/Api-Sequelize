create table users (
user_id serial primary key,
user_name varchar (255) not null,
password varchar (255) not null,
email varchar(255) not null
);


create table products (
  product_id serial primary key,
  product_name varchar(20) not null,
  description varchar(350) not null,
  value float not null,
  quantity int not null,
  cod_user serial references users(user_id) not null
);