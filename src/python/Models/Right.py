from src.python.Environment.database import Base
from sqlalchemy import Column, Integer, String, DateTime
from typing import List
from Permission import PermissionCreate
from pydantic import BaseModel


class Right(Base):
    __tablename__ = 'right'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255))


class RightBase(BaseModel):
      permissions: List[PermissionCreate] = []