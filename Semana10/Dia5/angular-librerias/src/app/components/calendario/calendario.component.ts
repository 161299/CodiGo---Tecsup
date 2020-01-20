import { Component, OnInit, ViewChild } from "@angular/core";
import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ScheduleComponent
} from "@syncfusion/ej2-angular-schedule";
// import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.css"],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService
  ]
  // specifies the template string for the Schedule component
})
export class CalendarioComponent implements OnInit {
  // ViewChild -> captura a un elemento de la vista cuyo nombre esta marcado con el operador # ejm: #fila2
  @ViewChild("fila2", { static: true }) fila2;

  @ViewChild("miCalendario", { static: true }) miCalendario: ScheduleComponent;

  // public agregarBoton: ButtonComponent;

  constructor() {}

  ngOnInit() {
    console.log(this.fila2);
  }

  public data: object[] = [
    {
      Id: 1,
      Subject: "Meeting",
      StartTime: new Date(2019, 11, 16, 11),
      EndTime: new Date(2019, 11, 16, 13),
      IsAllDay: false
    }
  ];

  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: "Id",
      subject: { name: "EventName" },
      isAllDay: { name: "IsAllDay" },
      startTime: { name: "StartTime" },
      endTime: { name: "EndTime" }
    }
  };
  // public selectedDate: Date = new Date(2019, 11, 6);

  agregarEventox() {
    console.log("se hizo click");
    let nuevaData: Object[] = [
      {
        Id: 2,
        Subject: "Cristhian Laurente Rerseva hecha",
        StartTime: new Date(2019, 11, 6, 11),
        EndTime: new Date(2019, 11, 6, 12),
        IsAllDay: false
      }
    ];

    this.miCalendario.addEvent(nuevaData);
    // this.agregarBoton.element.setAttribute('disabled','true');
  }

  agregarEventoHtml(objEvento) {
    console.log(objEvento);
  }
}
