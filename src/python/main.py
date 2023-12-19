from fastapi import FastAPI
from src.python.Routes.user_routes import router as user_router
from src.python.Routes.role_routes import router as role_router
from src.python.Routes.search_routes import router as search_router
from src.python.Routes.request_routes import router as request_router
from src.python.Routes.file_routes import router as file_router
from src.python.Routes.access_routes import router as access_router
from src.python.Routes.grant_routes import router as grant_router
from src.python.Routes.permission_routes import router as permission_router
from src.python.Routes.right_routes import router as right_router

app = FastAPI(title="6_Lab_API", description='Bla description')

app.include_router(user_router, tags=["users"], prefix="/users")
app.include_router(role_router, tags=["roles"], prefix="/roles")
app.include_router(request_router, tags=["requests"], prefix="/requests")
app.include_router(file_router, tags=["files"], prefix="/files")
app.include_router(search_router, tags=["search"], prefix="/search")

app.include_router(access_router, tags=["access"], prefix="/access")
app.include_router(grant_router, tags=["grant"], prefix="/grant")
app.include_router(permission_router, tags=["permission"], prefix="/permission")
app.include_router(right_router, tags=["right"], prefix="/right")





