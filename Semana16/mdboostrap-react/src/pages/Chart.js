import React, { useState, useEffect, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";

let generarColores = () => {
  let n1 = Math.floor(Math.random() * 255);
  let n2 = Math.floor(Math.random() * 255);
  let n3 = Math.floor(Math.random() * 255);
  let colores = `rgba(${n1},${n2},${n3})`;
  return colores;
};
let colores = [];

let arregloColores = cantidad => {

  for (let i = 0; i < cantidad; i++) {
    let color = generarColores();
    colores.push(color);
  }
};

const Chart = () => {
  console.log(colores);
  let [cargando, setCargando] = useState(true)
  let [dataBar, setDataBar] = useState({
    labels: ["Scrum", "Backend JS", "Backend Js", "Backend Python", "Frontend"],
    datasets: [
      {
        label: "Promedio de Notas",
        data: [19, 18, 17, 16, 18],
        backgroundColor: []
      }
    ]
  });

  let [barCharOptions, setBarCharOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)"
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 20
          }
        }
      ]
    }
  });

  const traerCursos = () => {
    axios
      .get("https://5e334f64e0161c00140ac151.mockapi.io/cursos")
      .then(rpta => {
        let cursos = [];
        let promedio = [];
        rpta.data.forEach(curso => {
          cursos.push(curso.cur_nom);
          promedio.push(curso.cur_nota);
        });
        console.log(colores)
        setDataBar({ ...dataBar, labels: cursos, datasets:[{backgroundColor:colores}]  });
        arregloColores(rpta.data.length);
        setCargando(false)
        //           console.log(rpta.data.length)
      });
  };

  useEffect(() => {
    traerCursos();               
  }, []);

  return (
    <Fragment>

      <MDBContainer>
        <Bar data={dataBar} options={barCharOptions} height="500" />
      </MDBContainer>
    </Fragment>
  );
};

export default Chart;
