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