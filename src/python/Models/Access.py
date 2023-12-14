from src.python.Environment.database import Base
from sqlalchemy import Column, Integer, String, DateTime


class Access(Base):
    __tablename__ = 'access'
    role_id = Column(Integer, nullable=False)
    file_id = Column(Integer, nullable=False)



