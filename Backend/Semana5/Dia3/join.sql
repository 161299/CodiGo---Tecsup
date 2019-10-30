use codigo8;

create table departamento(
	id_departamento int not null auto_increment,
    nombre_departamento varchar(100),
    primary key(id_departamento)
);

create table Empleados(
	id_empleado int auto_increment not null primary key,
    nombre_empleado varchar(50),
    id_departamentos int,
    foreign key(id_departamentos) references departamento(id_departamento)
);

insert into departamento  values (1,'ventas');
insert into departamento values (2,'Administracion'),
(3,'Finanzas'),
(4,'Marketing');

insert into Empleados values (1,'Juancho Rodriguez', 2),
(2,'Ana Lisa Polanco', 1),
(3,'Heisenberg',3),
(4,'Rosa Melgrano',2),
(5,'Devora Meltrozo',3),
(6,'Esteban Quito',null);

#el inner join hace que nos trae la interseccion de las dos tablas (pueden ser mas de dos)
#Si nosotros ponemos solo join si inner se sobre entiende que es inner join
select *
from empleados
inner join departamento
on empleados.id_departamentos = departamento.id_departamento;
#Seleccioname todos los campos de empleados que tengan en comun con departamentos cuando empleados.id = departamento.id

#left join
Select e.nombre_empleado, d.nombre_departamento
from empleados as E
left join departamento as D
on E.id_departamentos = D.id_departamento 
union
Select e.nombre_empleado, d.nombre_departamento
from empleados as E
right join departamento as D
on E.id_departamentos = D.id_departamento;









