import datetime
from src.python.Environment.database import Base
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
