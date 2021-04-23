import connection from './Connection';

export async function findAll() {
  const user = await connection;
  const res = await user.query('SELECT * FROM users');
  return res.rows;
}

export async function createUser(
  nome: string,
  telefone: number,
  email: string,
  idade: number,
  peso: number,
  senha: number,
  etinia: string,
) {
  const user = await connection;
  const sql =
    'INSERT INTO users(nome, telefone, email, idade, peso, senha, etinia) VALUES ($1,$2,$3,$4,$5,$6,$7);';
  const values = [nome, telefone, email, idade, peso, senha, etinia];
  return await user.query(sql, values);
}

export async function getByEmail(email: string) {
  const findEmail = await connection;
  const sql = 'SELECT * FROM users WHERE email=$1;';
  const values = [email];
  return await findEmail.query(sql, values);
  // return sql.rows;
}

export async function updateUser(
  nome: string,
  telefone: number,
  email: string,
  idade: number,
  peso: number,
  senha: number,
  etinia: string,
) {
  const user = await connection;
  const sql =
    'UPDATE users SET nome=$1, telefone=$2, email=$3, idade=$4, peso=$5, senha=$6, etinia=$7 WHERE id=id';
  const values = [nome, telefone, email, idade, peso, senha, etinia];
  return await user.query(sql, values);
}

export async function findOne(id: number) {
  const user = await connection;
  const sql = 'SELECT FROM users where id=$1;';
  return await user.query(sql, [id]);
}

export async function removeUser(id: number) {
  try {
    const user = await connection;
    const sql = 'DELETE FROM users where id=$1;';
    return await user.query(sql, [id]);
  } catch (error) {
    return console.error(error);
  }
}
