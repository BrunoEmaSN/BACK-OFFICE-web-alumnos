const GetAllMesasExamenes = `SELECT
        mm.id AS id,
        mm.descripcion AS descripcion,
        mm.periodo_id AS periodo_id,
        mm.estado AS estado,
        p.fecha_inicio AS fecha_inicio,
        p.fecha_fin AS fecha_fin,
        p.descripcion AS periodo_descripcion,
        p.tipo AS tipo
    FROM
        mesa_examen_maestro AS mm
    INNER JOIN periodos AS p
        ON p.id = mm.periodo_id`;

const QuantityAlumnosInscritedMesasExamenes = `SET @hoy = ?;
    SELECT
        COUNT(*) AS cantidad
    FROM
        mesa_examen_maestro AS mm
    INNER JOIN mesa_examen_novedad AS mn
        ON mn.maestro_id = mm.id
    INNER JOIN periodos AS p
        ON p.id = mm.periodo_id
    INNER JOIN alumno_mesa AS am
        ON am.mesa_id = mn.id
    WHERE p.fecha_inicio <= @hoy && p.fecha_fin >= @hoy;`;

const QuantityAlumnosNotInscritedMesasExamenes = `SET @hoy = ?;
    SELECT
        COUNT(*) AS cantidad
    FROM
        mesa_examen_maestro AS mm
    INNER JOIN mesa_examen_novedad AS mn
        ON mn.maestro_id = mm.id
    INNER JOIN periodos AS p
        ON p.id = mm.periodo_id
    INNER JOIN alumno_materia AS am1
        ON am1.materia_id = mn.materia_id
    LEFT JOIN alumno_mesa AS am2
        ON am2.alumno_id = am1.alumno_id
    WHERE
        (p.fecha_inicio <= @hoy && p.fecha_fin >= @hoy) &&
        am2.id = null && am1.estado = 'Regular';`;

export default {
    GetAllMesasExamenes,
    QuantityAlumnosInscritedMesasExamenes,
    QuantityAlumnosNotInscritedMesasExamenes,
}