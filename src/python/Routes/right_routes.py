from src.python.Models import Right
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("/rights/", status_code=status.HTTP_201_CREATED, response_model=Right.RightBase)
async def create_right(right: Right.RightBase, db: dependency):
    db_right = Right.Right(**right.dict())
    db.add(db_right)
    db.commit()
    db.refresh(db_right)
    return db_right


@router.get("", status_code=status.HTTP_200_OK,response_model=Right.RightBase)
async def get_right(db: dependency, right_id: int):
   right = db.query(Right.Right).filter(Right.Right.id == right_id).first()

   if right is None:
       raise HTTPException(status_code=404, detail="Right not found")
   return right
