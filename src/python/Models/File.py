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

