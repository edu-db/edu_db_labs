from src.python.Environment.database import Base
from sqlalchemy import Column, Integer, String


class Filter(Base):
    __tablename__ = 'filter'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    keyword = Column(String(255))
    country = Column(String(45))
    format = Column(String(45))
    request_id = Column(Integer)



