from src.python.Models import Permission
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()

@router.post("/permissions/",status_code=status.HTTP_201_CREATED, response_model=Permission.BaseModel)
async def create_permission(permission: Permission.PermissionCreate,db: dependency):
    db_permission = Permission.PermissionBase(**permission.dict())

    db.add(db_permission)
    db.commit()
    db.refresh(db_permission)
    return db_permission


@router.get("/permissions/{permission_id}", response_model=Permission.Permission)
async def read_permission(permission_id: int,db: dependency):
    return Permission