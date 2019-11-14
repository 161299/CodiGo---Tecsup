from app import app
from flask_mysqldb import MySQL

app.config['MYSQL_HOST']="remotemysql.com"
app.config['MYSQL_USER']="1i0cfL0Hvx"
app.config['MYSQL_PASSWORD']="Q67qODkmiR"
app.config['MYSQL_DB']="1i0cfL0Hvx"

mysql = MySQL(app)


