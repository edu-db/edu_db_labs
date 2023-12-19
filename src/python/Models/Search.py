from src.python.Environment.database import Base
from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer


class Search(Base):
    __tablename__ = 'search'
    request_id = Column(Integer, primary_key=True, index=True, nullable=False)
    file_id = Column(Integer, nullable=False)


class SearchBase(BaseModel):
    request_id: int
    file_id: int
