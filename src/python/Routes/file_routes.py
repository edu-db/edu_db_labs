from src.python.Models import File
from fastapi import status
from src.python.Environment.dependencies import dependency
from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED, response_model=File.FileBase)
async def create_file(file: File.FileBase, db: dependency):
    db_file = File.File(**file.dict())

    db.add(db_file)
    db.commit()
    db.refresh(db_file)
    return db_file


from fastapi import HTTPException


@router.put("{file_id}", status_code=status.HTTP_200_OK, response_model=File.FileBase)
async def update_file(file_id: int, file: File.FileBase, db: dependency):
    db_file = db.query(File.File).filter(File.File.id == file_id).first()

    if db_file is None:
        raise HTTPException(status_code=404, detail="File not found")

    # Update attributes only if they are not None in the input file
    for var, value in vars(file).items():
        if value is not None:
            setattr(db_file, var, value)

    db.commit()
    db.refresh(db_file)
    return db_file


@router.get("", status_code=status.HTTP_200_OK, response_model=List[File.FileWithIDAndDate])
async def read_all_files(db: dependency):
    files = db.query(File.File).all()
    if not files:
        raise HTTPException(status_code=404, detail="No files found")
    return files


@router.get("{file_id}", status_code=status.HTTP_200_OK, response_model=File.FileWithIDAndDate)
async def read_file(file_id: int, db: dependency):
    file = db.query(File.File).filter(File.File.id == file_id).first()

    if file is None:
        raise HTTPException(status_code=404, detail="File not found")
    return file


@router.delete("{file_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_file(file_id: int, db: dependency):
    file = db.query(File.File).filter(File.File.id == file_id).first()

    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    db.delete(file)
    db.commit()

    return None  # Returning None with status_code 204 NO CONTENT