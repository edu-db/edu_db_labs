from src.python.Environment.database import Base
from sqlalchemy import Column, Integer
from pydantic import BaseModel
from typing import List
from Permission import PermissionCreate

class Grant(Base):
    __tablename__ = 'grant'
    right_id = Column(Integer, nullable=False)
    role_id = Column(Integer, nullable=False)
    name: str
    permissions: List[PermissionCreate] = []



