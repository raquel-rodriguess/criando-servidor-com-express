
create table usuario (
    nome varchar(50),
    email varchar(100),
    idade int
);

INSERT INTO usuario (nome, email, idade) VALUES(
    "jaila",
    "jaila@teste.com",
    23
);
    SELECT * FROM usuario  WHERE idade = 23;
     SELECT * FROM usuario  WHERE idade >= 24;

     DElETE FROM usuario WHERE idade= 26;
      DElETE FROM usuario WHERE nome = "victor";

      UPDATE usuario  SET nome = "Kell"  WHERE nome = "raquel";