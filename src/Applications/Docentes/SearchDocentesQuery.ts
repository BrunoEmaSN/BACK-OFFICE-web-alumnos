const GetAllDocentes = `SELECT
        d_p_d.documento AS documento,
        d_p_d.tipo_documento AS tipo_documento,
        d_p_d.nombre AS nombre,
        d_p_d.apellido AS apellido,
        d_p_d.fecha_nacimiento AS fecha_nacimiento,
        d_p_d.sexo AS sexo,
        d_p_d.lugar_nacimiento AS lugar_nacimiento,
        d_p_d.telefono_fijo AS telefono_fijo,
        d_p_d.telefono_movil AS telefono_movil,
        d_p_d.domicilio AS domicilio,
        d_p_d.numero AS numero,
        d_p_d.departamento AS departamento,
        d_p_d.piso AS piso,
        d.fecha_agregado AS fecha_agregado,
        d.sede AS sede,
        d.titulo AS titulo,
        d.cuit AS cuit,
        d.subencionado AS subencionado,
        d.contratado AS contratado,
        d.monotributista AS monotributista,
        d.observaciones
    FROM docentes AS d
    INNER JOIN datos_personales AS d_p_d
        ON d_p_d.documento = d.id`;

const QuantityDocentesActive = `SELECT COUNT(id) AS cantidad FROM docentes WHERE estado = 1;`;

const QuantityDocentesWithdrawn = `SELECT COUNT(id) AS cantidad FROM docentes WHERE estado = 0;`;

const HoursAsignamentWeekByDocente = `SELECT
        dp.nombre,
        dp.apellido,
        m.descripcion,
        c.dias,
        c.horario_inicio,
        c.horario_fin
    FROM docentes AS d
    INNER JOIN datos_personales AS dp
        ON dp.documento = d.id
    INNER JOIN clases AS c
        ON c.docente_id = d.id
    INNER JOIN materias AS m
        ON m.id = c.materia_id
    WHERE d.id = ?`;


export default {
    GetAllDocentes,
    QuantityDocentesActive,
    QuantityDocentesWithdrawn,
    HoursAsignamentWeekByDocente
}