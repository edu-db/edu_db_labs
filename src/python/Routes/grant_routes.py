from src.python.Models import  Grant
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()

@router.post("/grants/", status_code=status.HTTP_201_CREATED, response_model=Grant.Grant)
async def create_grant(grant: Grant.Grant, db: dependency):
    db_grant = Grant.Grant(**grant.dict())
    db.add(db_grant)
    db.commit()
    db.refresh(db_grant)
    return db_grant
