create database PI;

use PI;

create table jogos (
id_jogo int not null auto_increment primary key,
nome varchar(45) not null,
preco float not null,
genero varchar(45) not null,
imagem varchar(45) not null,
descricao varchar(500) not null
);

create table usuarios (
id_usuario int not null primary key auto_increment,
email varchar(45) not null unique,
senha varchar(45) not null,
nome varchar(45) not null,
cpf varchar(45) not null,
telefone varchar(45) not null,
foto_usuario varchar(45)
);

create table endereco (
id_endereco int not null primary key auto_increment,
logradouro varchar(45) not null,
numero int not null,
cidade varchar(45) not null,
bairro varchar(45) not null,
cep varchar(45) not null,
id_usuarios int not null,
foreign key(id_usuarios) references usuarios(id_usuario)
);

alter table usuarios add valor_compra float;
alter table usuarios add link_qrcode varchar(100);

create table compras (
id_compra int not null primary key auto_increment,
id_usuario int not null,
foreign key(id_usuario) references usuarios(id_usuario),
data_compra date not null,
status_compra varchar(45) not null
);

create table jogos_compras (
id_jogos int not null,
foreign key(id_jogos) references jogos(id_jogo),
id_compras int not null,
foreign key(id_compras) references compras(id_compra),
preco int not null
);

create table contato(
id_contato int not null auto_increment primary key,
nome varchar(45) not null,
email varchar(45) not null,
msg varchar(500) not null
);







