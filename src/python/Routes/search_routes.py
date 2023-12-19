from src.python.Models import Search, File, Request
from fastapi import HTTPException, status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=Search.SearchBase)
async def create_search(search: Search.SearchBase, db: dependency):
    db_search = Search.Search(**search.dict())

    request_id = search.request_id
    request = db.query(Request.Request).filter(Request.Request.id == request_id).first()

    if request is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Request not found")

    file_id = search.file_id
    file = db.query(File.File).filter(File.File.id == file_id).first()

    if file is None:
        # Raise an exception if the user does not exist
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="File not found")

    db.add(db_search)
    db.commit()
    db.refresh(db_search)
    return db_search

@router.get("", status_code=status.HTTP_200_OK, response_model=List[Search.SearchBase])
async def read_all_searches(db: dependency):
    searches = db.query(Search.Search).all()
    if not searches:
        raise HTTPException(status_code=404, detail="No searches found")
    return searches


@router.get("{request_id}", status_code=status.HTTP_200_OK, response_model=Search.SearchBase)
async def read_search(request_id: int, db: dependency):
    search = db.query(Search.Search).filter(Search.Search.request_id == request_id).first()

    if search is None:
        raise HTTPException(status_code=404, detail="Search not found")
    return search


@router.delete("{search_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_search(request_id: int, db: dependency):
    search = db.query(Search.Search).filter(Search.Search.request_id == request_id).first()

    if search is None:
        raise HTTPException(status_code=404, detail="Search not found")

    db.delete(search)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT