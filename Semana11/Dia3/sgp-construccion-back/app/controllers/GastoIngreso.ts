import { GastoIngreso, Documento, Usuario } from "./../config/sequelize";
import { Request, Response } from "express";

export const postGastoIngreso = (req: Request, res: Response) => {
  let { fecha, crit, usuario, documento } = req.body;
  let objGastoIngreso = {
    gasin_fech: fecha,
    gasin_crit: crit,
    usu_id: usuario,
    doc_id: documento
  };
  //        GastoIngreso.build(objGastoIngreso)
  Usuario.findByPk(usuario)
    .then((usuarios: any) => {
      if (usuarios) {
        Documento.findByPk(documento).then((documentos: any) => {
          if (documentos) {
            GastoIngreso.build(objGastoIngreso)
              .save()
              .then((objGastoIngreso: any) => {
                let rpta = { ok: true, content: objGastoIngreso };
                res.status(201).json(rpta);
              })
              .catch((error: any) => {
                let fake = { ok: false, content: error };
                res.status(500).json(fake);
              });
          } else {
            let fake = {
              ok: false,
              content: `no hay ese documento en la base de datos`
            };
            res.status(404).json(fake);
          }
        });
      } else {
        let fake = { ok: false, content: `no hay ese usuario en la base de datos` };
        res.status(404).json(fake);
      }
    })
    .catch((error: any) => {
      let fake = { ok: false, content: error };
      res.status(500).json(fake);
    });
};

export const getGastoIngresoByPk = (req: Request, res: Response) => {
      let { id_gastoingreso } = req.params;
      GastoIngreso.findByPk(id_gastoingreso, {include: [{ model: Documento, attributes: ["doc_total"] }]})
      .then((objGastoIngreso: any) => {
      if (objGastoIngreso) {
          let rpta = { ok: true, content: objGastoIngreso };
          res.status(200).json(rpta);
      } 
      else {
          let fake = { ok: false, content: `Error al buscar gastoingreso, el ${id_gastoingreso} ingresado no existe`};
          res.status(404).json(fake);
      }
      })
      .catch((error: any) => {
          let fake = { ok: false, content: error.errors };
          res.status(500).json(fake);
       });
};

export const updateGastoIngresoByPk = (req: Request, res: Response) => {
     let { id_gastoingreso } = req.params;
     let { fecha, crit, usuario, documento } = req.body;
     let objGastoIngreso = {
                         gasin_fech: fecha,
                         gasin_crit: crit,
                         usu_id: usuario,
                         doc_id: documento
                        };
                        console.log(id_gastoingreso)
     Usuario.findByPk(usuario)
    .then((usuarios: any) => {
      if (usuarios) {
          Documento.findByPk(documento).then((documentos: any) => {
               if (documentos) {
                    GastoIngreso.update(objGastoIngreso, {where: {gasin_id : id_gastoingreso}})
                    .then((GastoIngresoUpdate: any) => {
                         let rpta = { ok: true,  message: 'valido', content:GastoIngresoUpdate };
                         res.status(201).json(rpta);
                    })
                    .catch((error: any) => {
                         let fake = { ok: false ,content: error };
                         res.status(500).json(fake);
                    });
               } 
               else {
                    let fake = {ok: false, content: `El ${documento} ingresado no existe`};
                    res.status(404).json(fake);
               }
          });
      } else {
          let fake = { ok: false, content: `El ${usuarios} ingresado no existe` };
          res.status(404).json(fake);
      }
    })
    .catch((error: any) => {
      let fake = { ok: false, content: error };
      res.status(500).json(fake);
    });
};
