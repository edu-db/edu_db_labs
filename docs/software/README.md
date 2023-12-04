# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql

    -- MySQL Workbench Forward Engineering
    
    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
    
    -- -----------------------------------------------------
    -- Schema MyDB
    -- -----------------------------------------------------
    DROP SCHEMA IF EXISTS `MyDB` ;
    
    -- -----------------------------------------------------
    -- Schema MyDB
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS `MyDB` ;
    USE `MyDB` ;
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`file`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`file` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`file` (
      `id` INT NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      `description` VARCHAR(255) NULL,
      `uploadDate` DATETIME NOT NULL,
      `lastEditTime` DATETIME NOT NULL,
      `format` VARCHAR(45) NOT NULL,
      `hasVisualization` TINYINT(1) NOT NULL,
      `authorId` INT NOT NULL,
      `country` VARCHAR(45) NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`role`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`role` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`role` (
      `id` INT UNSIGNED NOT NULL,
      `name` VARCHAR(45) NOT NULL,
      `description` VARCHAR(255) NULL,
      PRIMARY KEY (`id`),
      FULLTEXT INDEX `idx_title_description` (`name`, `description`))
    ENGINE = InnoDB;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`user`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`user` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`user` (
      `id` INT NOT NULL,
      `nickname` VARCHAR(45) NOT NULL,
      `firstname` VARCHAR(45) NOT NULL,
      `lastname` VARCHAR(45) NULL,
      `email` VARCHAR(255) NOT NULL,
      `password` VARCHAR(255) NOT NULL,
      `role_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_user_role1_idx` (`role_id` ASC),
      CONSTRAINT `fk_user_role1`
        FOREIGN KEY (`role_id`)
        REFERENCES `MyDB`.`role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`request`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`request` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`request` (
      `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
      `target` VARCHAR(255) NOT NULL,
      `type` VARCHAR(45) NOT NULL,
      `date` DATETIME NOT NULL,
      `user_id` INT NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_request_user1_idx` (`user_id` ASC),
      CONSTRAINT `fk_request_user1`
        FOREIGN KEY (`user_id`)
        REFERENCES `MyDB`.`user` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`right`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`right` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`right` (
      `id` INT UNSIGNED NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`filter`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`filter` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`filter` (
      `id` INT NOT NULL,
      `keyword` VARCHAR(255) NULL,
      `country` VARCHAR(45) NULL,
      `format` VARCHAR(45) NULL,
      `request_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_filter_request1_idx` (`request_id` ASC),
      CONSTRAINT `fk_filter_request1`
        FOREIGN KEY (`request_id`)
        REFERENCES `MyDB`.`request` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`search`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`search` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`search` (
      `request_id` INT UNSIGNED NOT NULL,
      `file_id` INT NOT NULL,
      PRIMARY KEY (`request_id`, `file_id`),
      INDEX `fk_search_file1_idx` (`file_id` ASC),
      CONSTRAINT `fk_search_request1`
        FOREIGN KEY (`request_id`)
        REFERENCES `MyDB`.`request` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_search_file1`
        FOREIGN KEY (`file_id`)
        REFERENCES `MyDB`.`file` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`permission`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`permission` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`permission` (
      `id` INT UNSIGNED NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      `right_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_permission_right1_idx` (`right_id` ASC),
      CONSTRAINT `fk_permission_right1`
        FOREIGN KEY (`right_id`)
        REFERENCES `MyDB`.`right` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`grant`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`grant` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`grant` (
      `right_id` INT UNSIGNED NOT NULL,
      `role_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`right_id`, `role_id`),
      INDEX `fk_grant_role1_idx` (`role_id` ASC),
      CONSTRAINT `fk_grant_right1`
        FOREIGN KEY (`right_id`)
        REFERENCES `MyDB`.`right` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_grant_role1`
        FOREIGN KEY (`role_id`)
        REFERENCES `MyDB`.`role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`access`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`access` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`access` (
      `role_id` INT UNSIGNED NOT NULL,
      `file_id` INT NOT NULL,
      PRIMARY KEY (`role_id`, `file_id`),
      INDEX `fk_access_file1_idx` (`file_id` ASC),
      CONSTRAINT `fk_access_role1`
        FOREIGN KEY (`role_id`)
        REFERENCES `MyDB`.`role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_access_file1`
        FOREIGN KEY (`file_id`)
        REFERENCES `MyDB`.`file` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


```

## RESTfull сервіс для управління даними(Python, FastAPI, sqlalchemy)
RESTfull сервіс створено на мові програмування Pyhon, використовуючи модули FastAPI та sqlalchemy.
Даний сервіс створено за моделю MVC (Model-View-Controller), з його допомогою розробник може легко взаємодіяти
з базою даних, уникаючи використання SQL-скриптів самотужки.

## Діаграма класів
<p>
    <img src="./resources/Diagram.png">
</p>

### Середовище

#### Database
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

URL_DATABASE = 'mysql+pymysql://root:Simple_password@localhost:3306/mydb'

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

#### Dependencies
```python
from fastapi import Depends
from Environment.database import SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

dependency = Annotated[Session, Depends(get_db)]
```

### Моделі

#### File
```python
from Environment.database import Base
from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer, String, DateTime, Boolean, func
import datetime


class File(Base):
    __tablename__ = 'file'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255))
    description = Column(String(255), nullable=True)
    uploadDate = Column(DateTime, default=func.now())
    lastEditTime = Column(DateTime, default=func.now())
    format = Column(String(45))
    hasVisualization = Column(Boolean)
    authorId = Column(Integer)
    country = Column(String(45))


class FileBase(BaseModel):
    name: str
    description: str
    lastEditTime: datetime.datetime
    format: str
    hasVisualization: bool
    authorId: int
    country: str

class FileWithIDAndDate(FileBase):
    id: int
    uploadDate: datetime.datetime

    class Config:
        from_attributes = True


```

#### Request
```python
import datetime
from Environment.database import Base
from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer, String, DateTime, func

class Request(Base):
    __tablename__ = 'request'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    target = Column(String(255))
    type = Column(String(45))
    date = Column(DateTime, default=func.now())
    user_id = Column(Integer)

class RequestBase(BaseModel):
    target: str
    type: str
    user_id: int

class RequestWithIDAndDate(RequestBase):
    id: int
    date: datetime.datetime

    class Config:
        from_attributes = True

```

#### Role
```python
from Environment.database import Base
from sqlalchemy import Column, Integer, String
from typing import Optional
from uuid import  UUID, uuid4
from pydantic import BaseModel

class Role(Base):
    __tablename__ = 'role'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(45))
    description = Column(String(255), nullable=True)



class RoleBase(BaseModel):
    name: str
    description: str


class RoleWithID(RoleBase):
    id: int

    class Config:
        from_attributes = True
```

#### Search
```python
from Environment.database import Base
from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer

class Search(Base):
    __tablename__ = 'search'
    request_id = Column(Integer, primary_key=True, index=True, nullable=False)
    file_id = Column(Integer, nullable=False)

class SearchBase(BaseModel):
    request_id: int
    file_id: int

```

#### User
```python
from Environment.database import Base
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String

class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nickname = Column(String(45))
    firstname = Column(String(45))
    lastname = Column(String(45))
    email = Column(String(255))
    password = Column(String(255))
    role_id = Column(Integer)


class UserBase(BaseModel):
    nickname: str
    firstname: str
    lastname: str
    email: str
    password: str
    role_id: int

class UserWithID(UserBase):
    id: int

    class Config:
        from_attributes = True
```

### Контролери

#### file_routes
```python
from Models import File
from fastapi import HTTPException, status
from Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=File.FileBase)
async def create_file(file: File.FileBase, db: dependency):
    db_file = File.File(**file.dict())

    db.add(db_file)
    db.commit()
    db.refresh(db_file)
    return db_file


from fastapi import HTTPException

@router.put("{file_id}", status_code=status.HTTP_200_OK, response_model=File.FileBase)
async def update_file(file_id: int, file: File.FileBase, db: dependency):
    db_file = db.query(File.File).filter(File.File.id == file_id).first()

    if db_file is None:
        raise HTTPException(status_code=404, detail="File not found")

    # Update attributes only if they are not None in the input file
    for var, value in vars(file).items():
        if value is not None:
            setattr(db_file, var, value)

    db.commit()
    db.refresh(db_file)
    return db_file


@router.get("", status_code=status.HTTP_200_OK, response_model=List[File.FileWithIDAndDate])
async def read_all_files(db: dependency):
    files = db.query(File.File).all()
    if not files:
        raise HTTPException(status_code=404, detail="No files found")
    return files


@router.get("{file_id}", status_code=status.HTTP_200_OK, response_model=File.FileWithIDAndDate)
async def read_file(file_id: int, db: dependency):
    file = db.query(File.File).filter(File.File.id == file_id).first()

    if file is None:
        raise HTTPException(status_code=404, detail="File not found")
    return file


@router.delete("{file_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_file(file_id: int, db: dependency):
    file = db.query(File.File).filter(File.File.id == file_id).first()

    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    db.delete(file)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT
```

#### request_routes
```python
from Models import Request, User
from fastapi import HTTPException, status
from Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=Request.RequestBase)
async def create_request(request: Request.RequestBase, db: dependency):
    db_request = Request.Request(**request.dict())

    user_id = request.user_id  # Replace with the actual field name in your Request model
    user = db.query(User.User).filter(User.User.id == user_id).first()

    if user is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request

# GET endpoint to retrieve all requests
@router.get("", status_code=status.HTTP_200_OK, response_model=List[Request.RequestWithIDAndDate])
async def read_all_requests(db: dependency):
    requests = db.query(Request.Request).all()
    if not requests:
        raise HTTPException(status_code=404, detail="No requests found")
    return requests


@router.get("{request_id}", status_code=status.HTTP_200_OK, response_model=Request.RequestWithIDAndDate)
async def read_request(request_id: int, db: dependency):
    request = db.query(Request.Request).filter(Request.Request.id == request_id).first()

    if request is None:
        raise HTTPException(status_code=404, detail="Request not found")
    return request


@router.delete("{request_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_request(request_id: int, db: dependency):
    request = db.query(Request.Request).filter(Request.Request.id == request_id).first()

    if request is None:
        raise HTTPException(status_code=404, detail="Request not found")

    db.delete(request)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT
```

#### role_routes
```python
from Models import  Role
from fastapi import HTTPException, status
from Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()

@router.post("", status_code=status.HTTP_201_CREATED, response_model=Role.RoleBase)
async def create_role(role: Role.RoleBase, db: dependency):
    db_role = Role.Role(**role.dict())
    db.add(db_role)
    db.commit()
    db.refresh(db_role)
    return db_role

@router.put("{role_id}", status_code=status.HTTP_200_OK, response_model=Role.RoleBase)
async def update_role(role_id: int, role: Role.RoleBase, db: dependency):
    db_role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if db_role is None:
        raise HTTPException(status_code=404, detail="Role not found")

    for var, value in vars(role).items():
        setattr(db_role, var, value) if value else None

    db.add(db_role)
    db.commit()
    db.refresh(db_role)

    return db_role

# GET endpoint to retrieve all roles
@router.get("", status_code=status.HTTP_200_OK, response_model=List[Role.RoleWithID])
async def read_all_roles(db: dependency):
    roles = db.query(Role.Role).all()
    if not roles:
        raise HTTPException(status_code=404, detail="No roles found")
    return roles

@router.get("{role_id}", status_code=status.HTTP_200_OK, response_model=Role.RoleWithID)
async def read_role(role_id: int, db: dependency):
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")
    return role


# DELETE endpoint to remove a role by id
@router.delete("{role_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_role(role_id: int, db: dependency):
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")

    db.delete(role)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT
```

#### search_routes
```python
from Models import Search, File, Request
from fastapi import HTTPException, status
from Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=Search.SearchBase)
async def create_search(search: Search.SearchBase, db: dependency):
    db_search = Search.Search(**search.dict())

    request_id = search.request_id
    request = db.query(Request.Request).filter(Request.Request.id == request_id).first()

    if request is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Request not found")

    file_id = search.file_id
    file = db.query(File.File).filter(File.File.id == file_id).first()

    if file is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="File not found")

    db.add(db_search)
    db.commit()
    db.refresh(db_search)
    return db_search

@router.get("", status_code=status.HTTP_200_OK, response_model=List[Search.SearchBase])
async def read_all_searches(db: dependency):
    searches = db.query(Search.Search).all()
    if not searches:
        raise HTTPException(status_code=404, detail="No searches found")
    return searches


@router.get("{request_id}", status_code=status.HTTP_200_OK, response_model=Search.SearchBase)
async def read_search(request_id: int, db: dependency):
    search = db.query(Search.Search).filter(Search.Search.request_id == request_id).first()

    if search is None:
        raise HTTPException(status_code=404, detail="Search not found")
    return search


@router.delete("{search_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_search(request_id: int, db: dependency):
    search = db.query(Search.Search).filter(Search.Search.request_id == request_id).first()

    if search is None:
        raise HTTPException(status_code=404, detail="Search not found")

    db.delete(search)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT
```

#### user_routes
```python
from Models import User, Role
from fastapi import HTTPException, status
from Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=User.UserBase)
async def create_user(user: User.UserBase, db: dependency):
    db_user = User.User(**user.dict())

    role_id = user.role_id  # Replace with the actual field name in your Request model
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if role is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.put("{user_id}", status_code=status.HTTP_200_OK, response_model=User.UserBase)
async def update_user(user_id: int, user: User.UserBase, db: dependency):
    db_user = db.query(User.User).filter(User.User.id == user_id).first()

    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    for var, value in vars(user).items():
        setattr(db_user, var, value) if value else None

    role_id = user.role_id  # Replace with the actual field name in your Request model
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if role is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


# GET endpoint to retrieve all users
@router.get("", status_code=status.HTTP_200_OK, response_model=List[User.UserWithID])
async def read_all_users(db: dependency):
    users = db.query(User.User).all()
    if not users:
        raise HTTPException(status_code=404, detail="No users found")
    return users


@router.get("{user_id}", status_code=status.HTTP_200_OK, response_model=User.UserWithID)
async def read_user(user_id: int, db: dependency):
    user = db.query(User.User).filter(User.User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.delete("{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: dependency):
    user = db.query(User.User).filter(User.User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT
```

### Файл запуску програми 
#### main
```python
from fastapi import FastAPI
from Routes.user_routes import router as user_router
from Routes.role_routes import router as role_router
from Routes.search_routes import router as search_router
from Routes.request_routes import router as request_router
from Routes.file_routes import router as file_router

app = FastAPI(title="6_Lab_API", description='Bla description')

app.include_router(user_router, tags=["users"], prefix="/users")
app.include_router(role_router, tags=["roles"], prefix="/roles")
app.include_router(request_router, tags=["requests"], prefix="/requests")
app.include_router(file_router, tags=["files"], prefix="/files")
app.include_router(search_router, tags=["search"], prefix="/search")
```
