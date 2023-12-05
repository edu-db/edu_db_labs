from Environment.database import Base
from sqlalchemy import Column, Integer, String, DateTime

class Grant(Base):
    __tablename__ = 'grant'
    right_id = Column(Integer, nullable=False)
    role_id = Column(Integer, nullable=False)





