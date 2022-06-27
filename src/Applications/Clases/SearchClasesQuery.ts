const GetAllClases = `SELECT 
    d_p_d.apellido as apellido,
    d_p_d.nombre as nombre,
    m.descripcion as materia,
    cu.grado_ano as grado,
    cu.division as division,
    cu.turno as turno,
    c.dias as dias,
    c.horario_inicio as inicio,
    c.horario_fin as fin
    FROM clases c
    INNER JOIN datos_personales d_p_d
    ON c.docente_id = d_p_d.documento
    INNER JOIN materias m
    ON c.materia_id = m.id
    INNER JOIN cursos cu
    ON c.curso_id = cu.id
    WHERE c.estado = 1
`

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

// 
const QuantityDocentesByDay = `SELECT
    
    d_p_d.apellido as apellido,
    d_p_d.nombre as nombre,
    m.descripcion as materia,
    m.regimen as regimen,
    cur.grado_ano as grado,
    cur.division as division,
    cur.turno as turno,
    c.horario_inicio as inicio,
    c.horario_fin as fin
    FROM clases c
    INNER JOIN datos_personales d_p_d
    ON c.docente_id = d_p_d.documento
    INNER JOIN materias m 
    ON c.materia_id = m.id
    INNER JOIN cursos cur
    ON c.curso_id = cur.id
    WHERE c.dias = ?
    AND c.estado = 1
`;


export default {
    GetAllClases,
    QuantityAsignaturasByDay,
    QuantityDocentesByDay,
}