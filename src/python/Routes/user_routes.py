from src.python.Models import User, Role
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=User.UserBase)
async def create_user(user: User.UserBase, db: dependency):
    db_user = User.User(**user.dict())

    role_id = user.role_id  # Replace with the actual field name in your Request model
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if role is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.put("{user_id}", status_code=status.HTTP_200_OK, response_model=User.UserBase)
async def update_user(user_id: int, user: User.UserBase, db: dependency):
    db_user = db.query(User.User).filter(User.User.id == user_id).first()

    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    for var, value in vars(user).items():
        setattr(db_user, var, value) if value else None

    role_id = user.role_id  # Replace with the actual field name in your Request model
    role = db.query(Role.Role).filter(Role.Role.id == role_id).first()

    if role is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


# GET endpoint to retrieve all users
@router.get("", status_code=status.HTTP_200_OK, response_model=List[User.UserWithID])
async def read_all_users(db: dependency):
    users = db.query(User.User).all()
    if not users:
        raise HTTPException(status_code=404, detail="No users found")
    return users


@router.get("{user_id}", status_code=status.HTTP_200_OK, response_model=User.UserWithID)
async def read_user(user_id: int, db: dependency):
    user = db.query(User.User).filter(User.User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.delete("{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: dependency):
    user = db.query(User.User).filter(User.User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT