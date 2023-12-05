from Models import Request, User
from fastapi import HTTPException, status
from Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=Request.RequestBase)
async def create_request(request: Request.RequestBase, db: dependency):
    db_request = Request.Request(**request.dict())

    user_id = request.user_id  # Replace with the actual field name in your Request model
    user = db.query(User.User).filter(User.User.id == user_id).first()

    if user is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request

# GET endpoint to retrieve all requests
@router.get("", status_code=status.HTTP_200_OK, response_model=List[Request.RequestWithIDAndDate])
async def read_all_requests(db: dependency):
    requests = db.query(Request.Request).all()
    if not requests:
        raise HTTPException(status_code=404, detail="No requests found")
    return requests


@router.get("{request_id}", status_code=status.HTTP_200_OK, response_model=Request.RequestWithIDAndDate)
async def read_request(request_id: int, db: dependency):
    request = db.query(Request.Request).filter(Request.Request.id == request_id).first()

    if request is None:
        raise HTTPException(status_code=404, detail="Request not found")
    return request


@router.delete("{request_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_request(request_id: int, db: dependency):
    request = db.query(Request.Request).filter(Request.Request.id == request_id).first()

    if request is None:
        raise HTTPException(status_code=404, detail="Request not found")

    db.delete(request)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT