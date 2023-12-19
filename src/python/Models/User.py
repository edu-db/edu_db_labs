from src.python.Environment.database import Base
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