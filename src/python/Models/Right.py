from Environment.database import Base
from sqlalchemy import Column, Integer, String, DateTime


class Right(Base):
    __tablename__ = 'right'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255))





