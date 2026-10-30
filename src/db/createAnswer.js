import pool from "./conections";

export const createAnswer = async ({
  google_id,
  gender,
  age,
  jobe_status,
  family_income,
  education_level,
  eating_habits,
  food,
  info_source,
  choise_paramiters,
}) => {
  const connection = await pool.connect();

  try {
    const result = await connection.query(
      "INSERT INTO consumer_data (google_id, gender, age, jobe_status, family_income, education_level, eating_habits, food, info_source, choise_paramiters) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        google_id,
        gender,
        age,
        jobe_status,
        family_income,
        education_level,
        eating_habits,
        food,
        info_source,
        choise_paramiters,
      ],
    );
    connection.release();
    return result.rows;
  } catch (err) {
    connection.release();
    throw err;
  }
};
