
const QuantityFreeAlumnos = `SELECT
    d_p_a.apellido,
    d_p_a.nombre,
    a_m.alumno_id as dni,
    a_m.estado
    FROM alumno_materia a_m
    INNER JOIN datos_personales d_p_a
    ON a_m.alumno_id = d_p_a.documento
    WHERE a_m.estado = Libre
    AND a_m.materia_id = ?`;

const QuantityPromotedAlumnos = `SELECT
    d_p_a.apellido,
    d_p_a.nombre,
    a_m.alumno_id as dni,
    a_m.estado
    FROM alumno_materia a_m
    INNER JOIN datos_personales d_p_a
    ON a_m.alumno_id = d_p_a.documento
    WHERE a_m.estado = Promocional
    AND a_m.materia_id = ?`;


const QuantityRegularAlumnos = `SELECT
    d_p_a.apellido,
    d_p_a.nombre,
    a_m.alumno_id as dni,
    a_m.estado
    FROM alumno_materia a_m
    INNER JOIN datos_personales d_p_a
    ON a_m.alumno_id = d_p_a.documento
    WHERE a_m.estado = Regular
    AND a_m.materia_id = ?`;

const QuantityAsignaturas = `SELECT
        m.descripcion AS materias,
        c.dias AS dia,
        TIMESTAMPDIFF(MINUTE, c.horario_inicio, c.horario_fin) AS minutos,
        p.fecha_inicio AS fecha_inicio,
        p.fecha_fin AS fecha_fin
    FROM clases AS c
    INNER JOIN periodos AS p
        ON p.id = c.periodo_id
    INNER JOIN materias AS m
        ON m.id = c.materia_id
    WHERE p.fecha_inicio <= CURDATE() AND p.fecha_fin >= CURDATE()`;

const QuantityHoursAsignamentByAsignaturas = `SELECT
        m.descripcion AS materia,
        SUM(TIMESTAMPDIFF(MINUTE, c.horario_inicio, c.horario_fin)) AS minutos
    FROM clases AS c
    INNER JOIN periodos AS p
        ON p.id = c.periodo_id
    INNER JOIN materias AS m
        ON m.id = c.materia_id
    WHERE p.fecha_inicio <= CURDATE() AND p.fecha_fin >= CURDATE()
    GROUP BY m.id`;

export default {
    QuantityFreeAlumnos,
    QuantityPromotedAlumnos,
    QuantityRegularAlumnos,
    QuantityAsignaturas,
    QuantityHoursAsignamentByAsignaturas,
}