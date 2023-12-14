from fastapi import Depends, HTTPException, FastAPI, Request
from typing import Annotated
from sqlalchemy.orm import Session
from src.python.Environment.database import SessionLocal
from fastapi.responses import JSONResponse
import pymysql


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


dependency = Annotated[Session, Depends(get_db)]