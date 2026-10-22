import pool from "./conections";

export const createAnswer = async ({
  email,
  gender,
  age,
  jobe_status,
  family_income,
  education_level,
  eating_habits,
  food,
}) => {
  const connection = await pool.connect();
  console.log(
    email,
    gender,
    age,
    jobe_status,
    family_income,
    education_level,
    eating_habits,
    food,
  );

  try {
    const result = await connection.query(
      "INSERT INTO consumer_data (email, gender, age, jobe_status, family_income, education_level, eating_habits, food) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        email,
        gender,
        age,
        jobe_status,
        family_income,
        education_level,
        eating_habits,
        food,
      ],
    );
    connection.release();
    return result.rows;
  } catch (err) {
    connection.release();
    console.log(err);

    throw err;
  }
};
