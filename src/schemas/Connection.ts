async function connect() {  
  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString:
  });

  //apenas testando a conexão
  const client = await pool.connect();
  console.log('Criou pool de conexões no PostgreSQL!');

  const res = await client.query('SELECT NOW()');
  console.log(res.rows[0]);
  client.release();

  return pool.connect();
}

export default connect();
