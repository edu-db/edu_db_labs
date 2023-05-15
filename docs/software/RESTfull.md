# RESTfull сервіс для управління даними

```import fastapi
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import pymysql


app = FastAPI()
class DataBase(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DataBase, cls).__new__(cls)
        return cls.instance
    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__connect()
    def __connect(self):
        self.connection = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        password='',
        database='mydb',)
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)
    def execute(self, command):
        self.cursor.execute(command)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result


@app.get("/api/allusers")
async def get_users():
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM Profile'))


@app.get('/api/user/{id}')
def get_user_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM Profile WHERE userid={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.post('/api/adduser', status_code=201)
async def add_new_user(req: Request):
    req_dict = await req.json()
    try:
        username = req_dict['username']
        password = req_dict['password']
        email = req_dict['email']
        role = req_dict['role']

    except:
        raise fastapi.HTTPException(status_code=400)
    db = DataBase()
    db.execute(
        f"INSERT INTO `Profile`(`username`,`password`,`email`,`Roletype_role`) VALUES ('{username}','{password}','{email}',{role});")
    if role == 2:
        return {'message': f'New user {username} added!'}
    elif role == 1:
        return {'message': f'New admin {username} added!'}


@app.put('/api/updateuser/{id}')
async def update_user(id, req: Request):
    req_dict = await req.json()
    db = DataBase()
    for key in req_dict:
        if not db.execute(f'SELECT * FROM Profile WHERE userid={id}'):
            raise fastapi.HTTPException(status_code=404)
        db.execute(f'UPDATE Profile SET {key}="{req_dict[key]}" WHERE userid={id}')
    return {"message":'Updated!'}


@app.delete('/api/deleteuser/{id}')
def delete(id):
    db = DataBase()
    if not db.execute(f'SELECT * FROM Profile WHERE userid={id}'):
        raise fastapi.HTTPException(status_code=404)
    db.execute(f'DELETE FROM `Profile` WHERE userid={id}')
    return {'message':f'User with id={id} deleted'}```