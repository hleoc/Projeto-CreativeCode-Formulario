import connection from './Connection';

export async function findAll() {
  const user = await connection;
  const res = await user.query('SELECT * FROM address');
  return res.rows;
}

export async function createAddress(
  idUser: number,
  endereco: string,
  numero: number,
  complemento: string,
  cep: number,
  cidade: string,
  estado: string,
) {
  const address = await connection;
  const sql =
    'INSERT INTO address(idUser, endereco, numero, complemento, cep, cidade, estado) VALUES ($1,$2,$3,$4,$5,$6,$7);';
  const values = [idUser, endereco, numero, complemento, cep, cidade, estado];
  return await address.query(sql, values);
}

export async function updateAddress(
  idUser: number,
  endereco: string,
  numero: number,
  complemento: string,
  cep: number,
  cidade: string,
  estado: string,
) {
  try {
    const address = await connection;
    const sql =
      'UPDATE address SET idUser=$1, endereco=$2, numero=$3, complemento=$4, cep=$5, cidade=$6, estado=$7 WHERE id=id';
    const values = [idUser, endereco, numero, complemento, cep, cidade, estado];
    return await address.query(sql, values);
  } catch (error) {
    return console.error(error);
  }
}

export async function findOneAddress(id: number) {
  const address = await connection;
  const sql = 'SELECT FROM address where id=$1;';
  return await address.query(sql, [id]);
}

export async function removeAddress(id: number) {
  const address = await connection;
  const sql = 'DELETE FROM address where id=$1;';
  return await address.query(sql, [id]);
}
