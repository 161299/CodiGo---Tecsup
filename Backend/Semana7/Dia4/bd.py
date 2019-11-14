from flask import Flask
from flask_mysqldb import MySQL
app = Flask(__name__)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='playa'

mysql = MySQL(app)

# VAMOS A HACER UN SISTEMA DE RESERVA DE AULAS, EN LA CUAL RESERVEMOS EL AULA SELECCIONADA PRIMERO POR SU PABELLON
@app.before_first_request
def inicializar_tablas():
    cursor = mysql.connection.cursor()
    crear_tablas= """ create table if not exists t_playa(
	                    playa_id int not null auto_increment primary key,
                        playa_nombre varchar(45),
                        playa_lat decimal(10,7),
                        playa_lng decimal(10,7),
                        playa_dir varchar(45)
                    );

                    create table if not exists t_slotplaya(
                        slot_id int not null auto_increment primary key,
                        slot_nro int,
                        slot_estado boolean,
                        playa_id int,
                        foreign key(playa_id) references t_playa(playa_id)
                    );

                    create table if not exists t_tipovehiculo(
                        tipo_id int not null auto_increment primary key,
                        tipo_nombre varchar(45),
                        tipo_precio decimal(3,2)
                    );

                    create table if not exists t_usuario(
                        usu_id int not null auto_increment primary key,
                        usu_email varchar(45),
                        usu_has text,
                        usu_salt text,
                        usu_rol varchar(10),
                        usu_nom varchar(30),
                        usu_ape varchar(45),
                        usu_fono varchar(15)
                    );

                    create table if not exists t_reserva (
                        res_id int not null auto_increment primary key,
                        res_fechin datetime,
                        res_fechfin datetime,
                        res_est boolean,
                        res_monto decimal(5,2),
                        res_placa varchar(10),
                        usu_id int,
                        slot_id int,
                        tipo_id int,
                        foreign key(usu_id) references t_usuario(usu_id),
                        foreign key(slot_id) references t_slotplaya(slot_id),
                        foreign key(tipo_id) references t_tipovehiculo(tipo_id)
                    );
    """
    cursor.execute(crear_tablas)
    cursor.close()