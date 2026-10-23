import pool from "./conections";

export const checkGoogleAnswer = async (id) => {
  try {
    const connection = await pool.connect();
    const data = await connection.query(
      "SELECT * FROM consumer_data WHERE google_id = $1",
      [id],
    );
    return data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
