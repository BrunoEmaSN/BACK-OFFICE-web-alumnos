const QuantityAsignaturasByDay = `SELECT
    c.horario_inicio,
    c.horario_fin,
    d_d_p.apellido,
    d_d_p.nombre,
    m.descripcion,
    m.regimen,
    cur.grado_ano,
    cur.division,
    cur.turno
    FROM clases c
    INNER JOIN datos_personales d_d_p
    ON c.docente_id = d_d_p.documento
    INNER JOIN materias m 
    ON c.materia_id = m.id
    INNER JOIN cursos cur
    ON c.curso_id = cur.id
    WHERE c.dias = ?
    AND c.estado = 1
`;

const QuantityDocentesByDay = `SELECT DISTINCT
    COUNT(c.docentes_id) as cantidad
    d_p_d.apellido,
    d_p_d.nombre,
    m.descripcion,
    m.regimen,
    cur.grado_ano,
    cur.division,
    cur.turno
    FROM clases c
    INNER JOIN datos_personales d_d_p
    ON c.docente_id = d_d_p.documento
    INNER JOIN materias m 
    ON c.materia_id = m.id
    INNER JOIN cursos cur
    ON c.curso_id = cur.id
    WHERE c.dias = ?
    AND c.estado = 1
`;


export default {
    QuantityAsignaturasByDay,
    QuantityDocentesByDay,
}