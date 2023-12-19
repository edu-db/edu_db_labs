from src.python.Models import Access
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.get("", status_code=status.HTTP_200_OK, response_model=Access.Base)
async def read_all_files(db: dependency):
    access = db.query(Access.Access).all()
    if not access:
        raise HTTPException(status_code=404, detail="No access found")
    return access
