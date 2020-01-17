import { conexion, Recurso, UnidadMedida, PresupuestoProyecto } from "./../config/sequelize";
import { Request, Response } from "express";

// trnasacciones para recibir mas de un objeto en si un arreglo de objetos
let crearPresupuestos = async (arrayPresupuestos: Array<any>) => {
  const t = await conexion.transaction();
  try {
    for (let i = 0; i < arrayPresupuestos.length; i++) {
      await PresupuestoProyecto.create(arrayPresupuestos[i], 
        { transaction: t }
        );
    }
    await t.commit();
    return true;
  } catch (error) {
    console.log("error en la transacción");
    console.log(error);
    t.rollback();
    throw error;
  }
};

export const PostPresupuestoProyecto = (req: Request, res: Response) => {
  console.log(req.body);

  crearPresupuestos(req.body)
    .then((rpta: any) => {
      console.log(rpta);
      res.status(201).json({
        ok: true,
        message: "Presupuestos creados de manera Exitosa"
      });
    })
    .catch((error: any) => {
      res.status(500).json({
        ok: false,
        content: error,
        message: "Error al crear el presupuesto"
      });
    });
};

export const getPresupuestoByIdProyecto = (req: Request, res: Response) => {
  let { pro_id } = req.params;
  PresupuestoProyecto.findAll({
    where: { pro_id: pro_id },
    include: [{ model: Recurso }, { model: UnidadMedida }]
  })
    .then((rpta: any) => {
      res.status(200).json({
        ok: true,
        content: rpta
      });
    })
    .catch((error: any) => {
      res.status(500).json({
        ok: false,
        content: error
      });
    });
};
