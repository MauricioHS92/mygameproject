create database projetoPI;
use projetoPI;

-- inserir o campo de descrição do jogo
create table jogos (
id_jogo int not null auto_increment primary key,
nome varchar(45) not null,
preco float not null,
genero varchar(45) not null,
imagem varchar(45) not null);

alter table jogos add descricao_jogo varchar(500);
select * from jogos;

-- inserindo os valores na tabela de jogos --
insert into jogos (id_jogo, nome, preco, genero, imagem) values ('', 'The Last of US part II', '250.9', 'FPS', 'thelastofus.png');

-- acrescentar a coluna de foto
-- deletar o campo endereço da tabela usuarios
create table usuarios (
id_usuario int not null primary key auto_increment,
email varchar(45) not null unique,
senha varchar(45) not null,
nome varchar(45) not null,
cpf varchar(45) not null unique,
telefone varchar(45) not null unique,
endereco varchar(45) not null unique
);

alter table usuarios add foto_usuario varchar(45);
alter table usuarios DROP COLUMN endereco;

select * from usuarios;



create table endereco (
id_endereco int not null primary key auto_increment,
logradouro varchar(45) not null,
numero int not null,
cidade varchar(45) not null,
bairro varchar(45) not null,
cep varchar(45) not null,
id_usuarios int,
foreign key(id_usuarios) references usuarios(id_usuario)
);

-- verificar com Gabriel sobre o campo método de pagamento
-- alterar id_usuario para not null -- PENDENTE
-- ciar coluna valor da compra
-- criar um campo para link do QRCODE
create table compras (
id_compra int not null primary key auto_increment,
id_usuario int,
foreign key(id_usuario) references usuarios(id_usuario),
data_compra date not null,
status_compra varchar(45) not null
);

alter table usuarios add valor_compra float;
alter table usuarios add link_qrcode varchar(100);


create table jogos_compras (
id_jogos int,
foreign key(id_jogos) references jogos(id_jogo),
id_compras int,
foreign key(id_compras) references compras(id_compra)
);

select * from jogos;



