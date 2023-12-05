from Environment.database import Base
from sqlalchemy import Column, Integer, String, DateTime


class Permission(Base):
    __tablename__ = 'permission'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255))
    right_id = Column(Integer, nullable=False)





