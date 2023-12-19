from src.python.Models import  Role
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()

@router.post("", status_code=status.HTTP_201_CREATED, response_model=Role.RoleBase)
async def create_role(role: Role.RoleBase, db: dependency):
    db_role = Role.Role(**role.dict())
    db.add(db_role)
    db.commit()
    db.refresh(db_role)
    return db_role

@router.put("{role_id}", status_code=status.HTTP_200_OK, response_model=Role.RoleBase)
async def update_role(role_id: int, role: Role.RoleBase, db: dependency):
    db_role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if db_role is None:
        raise HTTPException(status_code=404, detail="Role not found")

    for var, value in vars(role).items():
        setattr(db_role, var, value) if value else None

    db.add(db_role)
    db.commit()
    db.refresh(db_role)

    return db_role

# GET endpoint to retrieve all roles
@router.get("", status_code=status.HTTP_200_OK, response_model=List[Role.RoleWithID])
async def read_all_roles(db: dependency):
    roles = db.query(Role.Role).all()
    if not roles:
        raise HTTPException(status_code=404, detail="No roles found")
    return roles

@router.get("{role_id}", status_code=status.HTTP_200_OK, response_model=Role.RoleWithID)
async def read_role(role_id: int, db: dependency):
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")
    return role


# DELETE endpoint to remove a role by id
@router.delete("{role_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_role(role_id: int, db: dependency):
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")

    db.delete(role)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT