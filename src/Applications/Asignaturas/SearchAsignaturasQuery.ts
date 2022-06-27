
const GetAllAsignaturas = `
    SELECT * FROM MATERIAS
`;

const QuantityFreeAlumnos = `SELECT
    d_p_a.apellido,
    d_p_a.nombre,
    a_m.alumno_id as dni,
    a_m.estado
    FROM alumno_materia a_m
    INNER JOIN datos_personales d_p_a
    ON a_m.alumno_id = d_p_a.documento
    WHERE a_m.estado = 'Libre'
    AND a_m.materia_id = ?`;

const QuantityPromotedAlumnos = `SELECT
    d_p_a.apellido,
    d_p_a.nombre,
    a_m.alumno_id as dni,
    a_m.estado
    FROM alumno_materia a_m
    INNER JOIN datos_personales d_p_a
    ON a_m.alumno_id = d_p_a.documento
    WHERE a_m.estado = 'Promocional'
    AND a_m.materia_id = ?`;


const QuantityRegularAlumnos = `SELECT
    d_p_a.apellido,
    d_p_a.nombre,
    a_m.alumno_id as dni,
    a_m.estado
    FROM alumno_materia a_m
    INNER JOIN datos_personales d_p_a
    ON a_m.alumno_id = d_p_a.documento
    WHERE a_m.estado = 'Regular'
    AND a_m.materia_id = ?`;



export default {
    GetAllAsignaturas,
    QuantityFreeAlumnos,
    QuantityPromotedAlumnos,
    QuantityRegularAlumnos,
}